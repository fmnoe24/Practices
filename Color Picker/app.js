let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');

colorInput.addEventListener('input', ()=> {
    let color = colorInput.value;
    hexInput.value = color;
    document.body.style.background = color; //Selector del color de Fondo
    
    document.querySelector('h1').style.color = color; //Selector del color de Fuente
})