import { useEffect } from 'react';

const PregIntermedias = () => {

  useEffect(() => {
    // Seleccionamos los elementos que tienen la clase deseada
    const elements = document.querySelectorAll('.sd-scrollable-container.sd-rating.sd-rating--wrappable');
    
    // Iteramos sobre ellos y aplicamos el estilo
    elements.forEach(element => {
      element.style.margin = '0 auto';
    });
  }, []); // El array vacío asegura que esto solo ocurra una vez, después de montar el componente

  return [
    {
      type: "panel",
      name: "tiempo_respuesta_whatsapp_panel",
      elements: [
        {
          type: "rating",
          name: "tiempo_respuesta_whatsapp",
          title: "¿Qué tan satisfecho se encuentra con el tiempo de respuesta al hacer el pedido por WhatsApp?",
          isRequired: true,
          rateType: "smileys",  // Cambiado a smileys
          scaleColorMode: "colored",  // Usamos colores en las caritas
          rateColorMode: "scale",  // La escala de color cambia con la valoración
          displayMode: "buttons",  // Cambiado a botones
          renderAs: "smiley",
          hideNumber: true
        }
      ]
    },
    {
      type: "panel",
      name: "tiempo_entrega_pedido_panel",
      elements: [
        {
          type: "rating",
          name: "tiempo_entrega_pedido",
          title: "¿Qué tan satisfecho se encuentra con el tiempo de entrega de su pedido?",
          isRequired: true,
          rateType: "smileys",  // Cambiado a smileys
          scaleColorMode: "colored",  // Usamos colores en las caritas
          rateColorMode: "scale",  // La escala de color cambia con la valoración
          displayMode: "buttons", 
          renderAs: "smiley",
          hideNumber: true
        }
      ]
    },
    {
      type: "panel",
      name: "empaque_pedido_panel",
      elements: [
        {
          type: "rating",
          name: "empaque_pedido",
          title: "¿Qué tan satisfecho se encuentra con el empaque de su pedido?",
          isRequired: true,
          rateType: "smileys",  // Cambiado a smileys
          scaleColorMode: "colored",  // Usamos colores en las caritas
          rateColorMode: "scale",  // La escala de color cambia con la valoración
          displayMode: "buttons", 
          renderAs: "smiley",
          hideNumber: true
        }
      ]
    },
    {
      type: "panel",
      name: "presentacion_estado_pedido_panel",
      elements: [
        {
          type: "rating",
          name: "presentacion_estado_pedido",
          title: "¿Qué tan satisfecho se encuentra con la presentación y estado de su pedido al ser entregado?",
          isRequired: true,
          rateType: "smileys",  // Cambiado a smileys
          scaleColorMode: "colored",  // Usamos colores en las caritas
          rateColorMode: "scale",  // La escala de color cambia con la valoración
          displayMode: "buttons", 
          renderAs: "smiley",
          hideNumber: true
        }
      ]
    },
    {
      type: "panel",
      name: "amabilidad_personal_panel",
      elements: [
        {
          type: "rating",
          name: "amabilidad_personal",
          title: "¿Cómo evaluaría la amabilidad del personal que tomó tu pedido?",
          isRequired: true,
          rateType: "smileys",  // Cambiado a smileys
          scaleColorMode: "colored",  // Usamos colores en las caritas
          rateColorMode: "scale",  // La escala de color cambia con la valoración
          displayMode: "buttons", 
          renderAs: "smiley",
          hideNumber: true
        }
      ]
    },
    {
      type: "panel",
      name: "novedades_panel",
      elements: [
        {
          type: "comment",
          name: "novedades",
          title: "¿Qué tipo de productos o novedades te gustaría encontrar?",
          isRequired: false
        }
      ]
    },
    {
      type: "panel",
      name: "comentarios_panel",
      elements: [
        {
          type: "comment",
          name: "comentarios",
          title: "¿Tienes algún comentario adicional?",
          isRequired: false
        }
      ]
    },
    {
      type: "panel",
      name: "adjuntar_imagen_panel",
      elements: [
        {
          type: "file",
          name: "adjuntar_imagen",
          title: "Si deseas, puedes adjuntar una foto junto a tu respuesta",
          storeDataAsText: true,
          maxSize: 102400 // Tamaño máximo del archivo en bytes
        }
      ]
    }
  ];
};

export default PregIntermedias;
