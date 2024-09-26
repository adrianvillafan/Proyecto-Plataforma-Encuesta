const NumberRate = (bloque01Value, setBloque01Value) => {
  return {
    type: "panel", // Usamos un panel para agrupar los elementos
    name: "numberRatePanel",
    elements: [
      {
        type: "rating",
        name: "recomendar",
        title: "¿Qué tan probable es que recomiendes Muy Muy Barra Cevichera a un familiar o amigo?",
        isRequired: true,
        rateMin: 1,
        rateMax: 10,
        rateStep: 1,
        displayMode: "buttons",
        onValueChanged: (survey, options) => {
          setBloque01Value(options.value); // Actualiza el valor de rating
        }
      },
      {
        type: "comment",
        name: "razon_baja",
        title: "¿Cuál es la principal razón para calificarnos con esa nota?",
        visibleIf: "{recomendar} <= 6" // Condición para valores 0-6
      },
      {
        type: "comment",
        name: "mejorar",
        title: "¿Qué aspectos podríamos mejorar para que nos evalúes con mejor nota?",
        visibleIf: "{recomendar} >= 7 and {recomendar} <= 8" // Condición para valores 7-8
      },
      {
        type: "comment",
        name: "aspectos_positivos",
        title: "¿Qué aspectos positivos destacas para calificarnos con esa nota?",
        visibleIf: "{recomendar} >= 9" // Condición para valores 9-10
      }
    ]
  };
};

export default NumberRate;
