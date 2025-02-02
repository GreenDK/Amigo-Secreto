// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    // Validar entrada
    if (!nombre) {
        alert('Por favor ingresa un nombre válido');
        return;
    }
    
    // Agregar a la lista visual
    const lista = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
    lista.appendChild(nuevoAmigo);
    
    // Limpiar campo de entrada
    input.value = '';
    input.focus();
}

function sortearAmigo() {
    const lista = document.getElementById('listaAmigos').children;
    const resultado = document.getElementById('resultado');
    
    // Validar que hay elementos para sortear
    if (lista.length === 0) {
        alert('Agrega al menos un nombre para sortear');
        return;
    }
    
    // Limpiar resultados anteriores
    resultado.innerHTML = '';
    
    // Realizar sorteo
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    const ganador = lista[indiceAleatorio].textContent;
    
    // Mostrar resultado
    const elementoResultado = document.createElement('li');
    elementoResultado.textContent = ganador;
    resultado.appendChild(elementoResultado);
}