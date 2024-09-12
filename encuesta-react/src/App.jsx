import React, { useState } from 'react';
import 'survey-core/defaultV2.min.css'; // Estilos de SurveyJS
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

// Importamos el fragmento NumberRate
import NumberRate from './Bloque_01/NumberRate';

StylesManager.applyTheme("defaultV2");

function App() {
  const [bloque01Value, setBloque01Value] = useState(null);
  const numberRate = NumberRate(bloque01Value, setBloque01Value);

  const surveyJson = {
    completedHtml: "<h3>¡Gracias por completar la encuesta!</h3><p>Tu opinión es muy importante para nosotros.</p>",
    showProgressBar: "top",
    progressBarType: "pages",
    pages: [
      {
        name: "page1",
        elements: []
      },
      {
        name: "page2",
        elements: [numberRate] // Llamamos a NumberRate que contiene la lógica
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

  return (
    <div className="survey-container" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      {/* Centramos el logo */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img src="https://www.salsasangucheria.com/encuestas/salsalogof.png" alt="Salsa Logo" style={{ width: "200px", height: "auto" }} />
      </div>
      <Survey model={survey} />
    </div>
  );
}

export default App;
