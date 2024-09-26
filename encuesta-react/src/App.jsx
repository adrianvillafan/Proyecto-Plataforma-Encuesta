import React, { useState, useEffect } from 'react';
import 'survey-core/defaultV2.min.css'; // SurveyJS defaultV2 styles
import './assets/survey-theme.css'; // Import the custom theme
import { StylesManager, Model, surveyLocalization } from 'survey-core';
import "survey-core/survey.i18n";
import { Survey } from 'survey-react-ui';

// Importamos el fragmento NumberRate
import NumberRate from './Bloque_01/NumberRate';
import PregIntermedias from './Bloque_02/PregIntermedias';

StylesManager.applyTheme("defaultV2");

surveyLocalization.currentLocale = "es";

function App() {
  const [bloque01Value, setBloque01Value] = useState(null);
  const numberRate = NumberRate(bloque01Value, setBloque01Value);
  const pregIntermedias = PregIntermedias();

  const surveyJson = {
    completedHtml: "<h3>¡Gracias por completar la encuesta!</h3><p>Tu opinión es muy importante para nosotros.</p>",
    showProgressBar: "top",
    progressBarType: "pages",
    pages: [
      {
        name: "page1",
        elements: [numberRate]
      },
      {
        name: "page2",
        elements: pregIntermedias 
      },
      {
        name: "page3",
        elements: [
          {
            type: "text",
            name: "nombre",
            title: "Nombre",
            isRequired: true,
            validators: [
              {
                type: "regex",
                text: "El nombre no puede contener números.",
                regex: "^[^0-9]*$", // Expresión regular que no permite números
              }
            ]
          },
          {
            type: "text",
            name: "apellido",
            title: "Apellido",
            isRequired: true,
            validators: [
              {
                type: "regex",
                text: "El apellido no puede contener números.",
                regex: "^[^0-9]*$", // Expresión regular que no permite números
              }
            ]
          },
          {
            type: "text",
            name: "email",
            title: "E-mail",
            inputType: "email",
            isRequired: true,
            validators: [
              {
                type: "email",
                text: "Por favor ingrese un correo válido.",
              }
            ]
          },
          {
            type: "text",
            name: "telefono",
            title: "Número celular",
            inputType: "tel",
            isRequired: true,
            validators: [
              {
                type: "regex",
                text: "El número debe tener al menos 9 dígitos.",
                regex: "^[0-9]{9,}$" // Mínimo 9 dígitos, solo números
              }
            ]
          }
        ]
        
      }
    ],
    showQuestionNumbers: "off",
    completeText: "Enviar"
  };

  const survey = new Model(surveyJson);

  // Hook para observar y aplicar el estilo dinámicamente a los elementos
  useEffect(() => {
    const applyStyle = () => {
      const elements = document.querySelectorAll('.sd-scrollable-container.sd-rating.sd-rating--wrappable');
      elements.forEach(element => {
        element.style.margin = '0 auto';
      });
    };

    // Aplicar el estilo inicialmente
    applyStyle();

    // Crear un observador de mutaciones para detectar cambios en el DOM
    const observer = new MutationObserver(() => {
      applyStyle(); // Vuelve a aplicar el estilo cada vez que cambia el DOM
    });

    // Comenzamos a observar el body (o puedes limitarlo a un contenedor específico)
    observer.observe(document.body, { childList: true, subtree: true });

    // Limpiar el observer cuando el componente se desmonta
    return () => observer.disconnect();
  }, []);

  // Manejar el evento onComplete
  survey.onComplete.add((sender) => {
    console.log(sender)
    console.log('Encuesta completada:', sender.data);
    const surveyData = sender.data;  // Captura los datos del formulario

    // Enviar datos al backend usando fetch
    fetch('https://barra.freskos.com.pe/apis/Api-encuestas-insert/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(surveyData),  // Convertir los datos a JSON y enviarlos
    })
    .then(response => response.json())
    .then(data => {
      console.log('Éxito al enviar la encuesta:', data);
    })
    .catch((error) => {
      console.error('Error al enviar la encuesta:', error);
    });
  });

  return (
    <div className="survey-container" style={{ maxWidth: "800px", margin: "0 auto", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      {/* Centramos el logo */ }
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img src="https://i.imgur.com/TsAB5gf.png" alt="Muy Muy Logo" style={{ width: "200px", height: "auto" }} />
      </div>
      <Survey model={survey} />
    </div>
  );
}

export default App;
