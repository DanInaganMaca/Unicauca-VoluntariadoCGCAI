/* -- COLLAPSE Effect -- */
// Obtener los elementos del DOM
const btn_timelines = document.querySelectorAll('.btn-timeline');
const btn_descs = document.querySelectorAll('.btn-desc');
const timelines = document.querySelectorAll('.timeline');
const descs = document.querySelectorAll('.desc');
  

// Agregar evento de clic a todos los botones
btn_timelines.forEach((btn_timeline, i) => {
    btn_timeline.addEventListener('click', function() {
    timelineDescription(i);
  });
});
btn_descs.forEach((btn_desc, i) => {
    btn_desc.addEventListener('click', function() {
    descDescription(i);
  });
});

// Función para colapsar / expandir la descripción correspondiente al índice proporcionado
function timelineDescription(i) {
    // Cambiar el estado del botón
    const expanded = btn_timelines[i].getAttribute('aria-expanded') === 'true' || false;
    btn_timelines[i].setAttribute('aria-expanded', !expanded);
    
    // Cambiar la clase del contenido a colapsar
    timelines[i].classList.toggle('timeline-expanded', !expanded); 
  }
function descDescription(i) {
    // Cambiar el estado del botón
    const expanded = btn_descs[i].getAttribute('aria-expanded') === 'true' || false;
    btn_descs[i].setAttribute('aria-expanded', !expanded);
  
    // Cambiar la clase del contenido a colapsar
    descs[i].classList.toggle('desc-expanded');
}



