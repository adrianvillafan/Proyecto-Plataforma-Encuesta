import React, { useState, useEffect } from 'react';
import 'survey-core/defaultV2.min.css'; // Estilos de SurveyJS
import { StylesManager, Model, surveyLocalization } from 'survey-core';
import "survey-core/survey.i18n";
import { Survey } from 'survey-react-ui';

// Importamos el fragmento NumberRate
import NumberRate from './Bloque_01/NumberRate';
import MozoSelector from './Bloque_01/MozoSelector';
import PregIntermedias from './Bloque_02/PregIntermedias';

StylesManager.applyTheme("defaultV2");

surveyLocalization.currentLocale = "es";

function App() {
  const [bloque01Value, setBloque01Value] = useState(null);
  const numberRate = NumberRate(bloque01Value, setBloque01Value);
  const mozoSelector = MozoSelector();
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
            isRequired: true
          },
          {
            type: "text",
            name: "apellido",
            title: "Apellido",
            isRequired: true
          },
          {
            type: "text",
            name: "email",
            title: "E-mail",
            inputType: "email",
            isRequired: true
          },
          {
            type: "text",
            name: "telefono",
            title: "Número celular",
            inputType: "tel",
            isRequired: true
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
