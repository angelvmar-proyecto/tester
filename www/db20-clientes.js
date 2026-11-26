// Lote 5: Preguntas del Cliente (Turistas)
const db20_clientes = [
  // === PREGUNTAS BÁSICAS ===
  {i:6001,c:"preguntas_clientes",e:"Disculpe, ¿dónde está el baño?",n:"Excuse me, where is the bathroom?"},
  {i:6002,c:"preguntas_clientes",e:"¿Cuánto cuesta esto?",n:"How much does this cost?"},
  {i:6003,c:"preguntas_clientes",e:"¿Aceptan tarjeta de crédito?",n:"Do you accept credit cards?"},
  {i:6004,c:"preguntas_clientes",e:"¿Puedo pagar con dólares?",n:"Can I pay with dollars?"},
  {i:6005,c:"preguntas_clientes",e:"¿Tienen cambio para cien dólares?",n:"Do you have change for a hundred dollars?"},
  {i:6006,c:"preguntas_clientes",e:"¿Hay algún descuento disponible?",n:"Is there any discount available?"},
  {i:6007,c:"preguntas_clientes",e:"¿Cuánto tiempo dura el recorrido?",n:"How long does the tour last?"},
  {i:6008,c:"preguntas_clientes",e:"¿A qué hora es la salida?",n:"What time is the departure?"},
  {i:6009,c:"preguntas_clientes",e:"¿Dónde nos recogen?",n:"Where do you pick us up?"},
  {i:6010,c:"preguntas_clientes",e:"¿El transporte está incluido?",n:"Is transportation included?"},

  // === SEGURIDAD Y SALUD ===
  {i:6011,c:"preguntas_clientes",e:"¿El agua de la llave es potable?",n:"Is the tap water safe to drink?"},
  {i:6012,c:"preguntas_clientes",e:"¿Es seguro caminar por aquí de noche?",n:"Is it safe to walk around here at night?"},
  {i:6013,c:"preguntas_clientes",e:"¿Qué pasa si llueve o hay mal tiempo?",n:"What happens if it rains or the weather is bad?"},
  {i:6014,c:"preguntas_clientes",e:"¿Necesito saber nadar para hacer esto?",n:"Do I need to know how to swim to do this?"},
  {i:6015,c:"preguntas_clientes",e:"¿Dónde puedo comprar protector solar?",n:"Where can I buy sunscreen?"},
  {i:6016,c:"preguntas_clientes",e:"¿Tienen un botiquín de primeros auxilios?",n:"Do you have a first-aid kit?"},
  {i:6017,c:"preguntas_clientes",e:"¿Hay un hospital o doctor cerca?",n:"Is there a hospital or doctor nearby?"},
  {i:6018,c:"preguntas_clientes",e:"¿Es peligroso nadar en esta playa?",n:"Is it dangerous to swim at this beach?"},

  // === SERVICIOS DEL HOTEL ===
  {i:6019,c:"preguntas_clientes",e:"¿Cuál es la contraseña del Wi-Fi?",n:"What is the Wi-Fi password?"},
  {i:6020,c:"preguntas_clientes",e:"¿A qué hora es el desayuno?",n:"What time is breakfast?"},
  {i:6021,c:"preguntas_clientes",e:"¿Hasta qué hora está abierta la piscina?",n:"Until what time is the pool open?"},
  {i:6022,c:"preguntas_clientes",e:"¿Puedo pedir servicio a la habitación?",n:"Can I order room service?"},
  {i:6023,c:"preguntas_clientes",e:"¿A qué hora es el check-out?",n:"What time is check-out?"},
  {i:6024,c:"preguntas_clientes",e:"¿Puedo dejar mi equipaje después del check-out?",n:"Can I leave my luggage after check-out?"},
  {i:6025,c:"preguntas_clientes",e:"¿El hotel tiene transporte al aeropuerto?",n:"Does the hotel have airport transportation?"},
  {i:6026,c:"preguntas_clientes",e:"¿Cómo puedo llamar a un taxi?",n:"How can I call a taxi?"},

  // === COMPRAS Y TOURS ===
  {i:6027,c:"preguntas_clientes",e:"¿Es 100% agave este tequila?",n:"Is this tequila 100% agave?"},
  {i:6028,c:"preguntas_clientes",e:"¿Puedo probar antes de comprar?",n:"Can I try it before buying?"},
  {i:6029,c:"preguntas_clientes",e:"¿Tienen este producto en otra talla o color?",n:"Do you have this product in another size or color?"},
  {i:6030,c:"preguntas_clientes",e:"¿La artesanía es hecha a mano?",n:"Is the handicraft handmade?"},
  {i:6031,c:"preguntas_clientes",e:"¿Puedo llevar esto en mi equipaje de mano?",n:"Can I take this in my carry-on luggage?"},
  {i:6032,c:"preguntas_clientes",e:"¿Me pueden enviar esto a mi país?",n:"Can you ship this to my country?"},
  {i:6033,c:"preguntas_clientes",e:"¿El tour incluye comida y bebidas?",n:"Does the tour include food and drinks?"},
  {i:6034,c:"preguntas_clientes",e:"¿Podemos tomar fotos durante el tour?",n:"Can we take photos during the tour?"},
  {i:6035,c:"preguntas_clientes",e:"¿Las fotos están incluidas o se compran aparte?",n:"Are the photos included or bought separately?"},
  {i:6036,c:"preguntas_clientes",e:"¿Cuál es la edad mínima para este tour?",n:"What is the minimum age for this tour?"},
  {i:6037,c:"preguntas_clientes",e:"¿Puedo cancelar mi reserva y obtener un reembolso?",n:"Can I cancel my reservation and get a refund?"},
  {i:6038,c:"preguntas_clientes",e:"¿Hay algún cargo extra que deba saber?",n:"Are there any extra charges I should know about?"},
  {i:6039,c:"preguntas_clientes",e:"¿Tienen un mapa de la zona?",n:"Do you have a map of the area?"},
  {i:6040,c:"preguntas_clientes",e:"¿Qué me recomienda hacer si tengo un día libre?",n:"What do you recommend I do if I have a free day?"}
];
