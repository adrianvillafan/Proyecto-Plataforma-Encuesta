import React, { useEffect, useState } from 'react';

const MozoSelector = () => {
  const [mozos, setMozos] = useState([]);

  useEffect(() => {
    // Simulación de consulta a la base de datos para obtener los mozos
    fetch('https://api-mozos.onrender.com/consultar?Local=FRESKOS')
      .then(response => response.json())
      .then(data => {
        setMozos(data.mozos); // Asume que la respuesta tiene un array de 'mozos'
      });
  }, []);

  return {
    type: "dropdown",
    name: "mozo",
    title: "¿Qué mozo te atendió?",
    isRequired: true,
    choices: mozos.map(mozo => ({ value: mozo.id, text: mozo.nombre }))
  };
};

export default MozoSelector;
