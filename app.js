import './components/tarjetaPerfil.js';
import './components/personalizadorPerfil.js';
import './components/espeModal.js';

//Eventos personalizados
document.getElementById('modal').addEventListener('modal-cerrado', () => {
    alert("El modal fue cerrado");
});