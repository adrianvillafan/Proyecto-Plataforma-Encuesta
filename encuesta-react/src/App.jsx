import React from 'react';
import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

StylesManager.applyTheme("modern");

const surveyJson = {
  isPanelless: true,  
  logo: "https://www.salsasangucheria.com/encuestas/salsalogof.png",
  logoPosition: "top",
  showProgressBar: "top",
  progressBarType: "pages",
  completedHtml: "<h3>¡Gracias por completar la encuesta!</h3><p>Tu opinión es muy importante para nosotros.</p>",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "dropdown",
          name: "mozo",
          title: "¿Qué mozo te atendió?",
          isRequired: true,
          choices: [
            "Rubby Cardenas",
            "Maribel Castillo",
            "Denise Cullash",
            "Reina Dextre",
            "Leslie Merino",
            "Genesis Luna"
          ]
        }
      ]
    },
    {
      name: "page2",
      elements: [
        {
          type: "rating",
          name: "calidadPlato",
          title: "La calidad del plato recibido",
          isRequired: true,
          rateType: "smileys",
          rateValues: [
            { value: 1, text: "Muy malo" },
            { value: 2, text: "Malo" },
            { value: 3, text: "Indiferente" },
            { value: 4, text: "Bueno" },
            { value: 5, text: "Excelente" }
          ]
        },
        {
          type: "rating",
          name: "servicioMozo",
          title: "El servicio del mozo en tu visita",
          isRequired: true,
          rateType: "smileys",
          rateValues: [
            { value: 1, text: "Muy malo" },
            { value: 2, text: "Malo" },
            { value: 3, text: "Indiferente" },
            { value: 4, text: "Bueno" },
            { value: 5, text: "Excelente" }
          ]
        },
        {
          type: "rating",
          name: "decoracionMusica",
          title: "La decoración y música del restaurante",
          isRequired: true,
          rateType: "smileys",
          rateValues: [
            { value: 1, text: "Muy malo" },
            { value: 2, text: "Malo" },
            { value: 3, text: "Indiferente" },
            { value: 4, text: "Bueno" },
            { value: 5, text: "Excelente" }
          ]
        },
        {
          type: "rating",
          name: "limpiezaOrden",
          title: "El orden y limpieza en el restaurante",
          isRequired: true,
          rateType: "smileys",
          rateValues: [
            { value: 1, text: "Muy malo" },
            { value: 2, text: "Malo" },
            { value: 3, text: "Indiferente" },
            { value: 4, text: "Bueno" },
            { value: 5, text: "Excelente" }
          ]
        }
      ],
      description: "Si calificas alguno de los aspectos con 'Muy malo' o 'Malo', te pediremos que nos expliques por qué."
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

function App() {
  const survey = new Model(surveyJson);

  return (
    <div className="survey-container" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      <Survey model={survey} />
    </div>
  );
}

export default App;
