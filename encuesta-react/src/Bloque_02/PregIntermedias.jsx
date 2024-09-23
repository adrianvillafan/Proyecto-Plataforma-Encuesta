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
          rateMin: 0,
          rateMax: 10,
          rateStep: 1,
          rateType: "smileys",  // Cambiado a smileys
          scaleColorMode: "colored",  // Usamos colores en las caritas
          rateColorMode: "scale",  // La escala de color cambia con la valoración
          onValueChanged: (survey, options) => {
            setBloque01Value(options.value); // Actualiza el valor de rating
          },
          // Aplicamos un estilo en línea para centrar las caritas
          renderAs: "svg", // Renderizado como SVG
          cssClasses: {
            root: "centered-rating", // Clase personalizada para centrar
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
  