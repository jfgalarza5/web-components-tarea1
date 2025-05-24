export class EspeModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="modal">
                <div class="modal-content">
                    <slot>Contenido por defecto del modal</slot>
                    <button id="cerrar">Cerrar</button>
                </div>
            </div>
            ${this.getStyle()}
        `;
        return template;
    }

    getStyle() {
        return `
            <style>
                * {
                    box-sizing: border-box;
                }
            
                .modal {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, 0.6);
                    z-index: 1000;
                    transition: opacity 0.3s ease;
                    justify-content: center;
                    align-items: center;
                }
            
                .modal.mostrar {
                    display: flex;
                }
            
                .modal-content {
                    background-color: #fff;
                    padding: 30px;
                    width: 90%;
                    max-width: 500px;
                    border-radius: 12px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                    position: relative;
                    animation: fadeIn 0.3s ease;
                }
            
                button#cerrar {
                    margin-top: 20px;
                    background-color: #a52a2a;
                    color: white;
                    padding: 10px 16px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.2s ease;
                }
            
                button#cerrar:hover {
                    background-color: #871f1f;
                }
            
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
            
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            </style>
        `;
    }

    botonAccion() {
        this.shadowRoot.getElementById("cerrar").addEventListener("click", () => this.ocultar());
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        this.botonAccion();
    }
    connectedCallback() {
        this.render();
    }

    mostrar() {
        this.shadowRoot.querySelector('.modal').classList.add('mostrar');
    }

    ocultar() {
        this.shadowRoot.querySelector('.modal').classList.remove('mostrar');
    }
}

customElements.define('espe-modal', EspeModal);
