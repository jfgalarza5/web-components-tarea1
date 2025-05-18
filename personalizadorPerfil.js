class PersonalizadorPerfil extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = /*html*/ `
        <form>
            <label>Fondo: <input type="color" id="color" value="#ffffff"></label>
            <label>Foto de perfil: <input type="text" id="img" placeholder="https://imagen.jpg" required></label>
            <label>Nombre: <input type="text" id="nombre" placeholder="Ingresa tu nombre" required></label>
            <label>Descripcion: <input type="text" id="descripcion" placeholder="Ingresa tu descripcion" required></label>
            <button id="btn_actualizar">Actualizar</button>
        </form>
        ${this.getStyle()}
        `;
        return template;
    }
    getStyle(){
    return `
        <style>
            form {
                display: flex;
                flex-direction: column;
                gap: 12px;
                padding: 20px;
                background-color: #ffffff;
                border: 1px solid #ddd;
                border-radius: 12px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                width: 280px;
            }

            label {
                display: flex;
                flex-direction: column;
                font-size: 14px;
                color: #333;
            }

            input {
                padding: 8px 10px;
                border: 1px solid #ccc;
                border-radius: 6px;
                font-size: 14px;
            }

            #color{
                padding: 0px;
            }

            button {
                padding: 10px;
                font-size: 14px;
                background-color:#a22;
                color: white;
                border: none;
                border-radius: 6px;
            }
        </style>
        `;
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));

        this.shadowRoot.querySelector("#btn_actualizar").addEventListener("click", ()=>{
            const tarjeta_perfil = document.getElementById(this.getAttribute("id_tarjeta"));
            if(!tarjeta_perfil) return;
            const color = this.shadowRoot.querySelector('#color').value;
            const imagen = this.shadowRoot.querySelector('#img').value;
            const nombre = this.shadowRoot.querySelector('#nombre').value;
            const descripcion = this.shadowRoot.querySelector('#descripcion').value;

            if(!color || !nombre || !imagen || !descripcion) return;
            
            tarjeta_perfil.setAttribute('tema', color);
            tarjeta_perfil.setAttribute('src', imagen);
            
            const nombreSlot = tarjeta_perfil.querySelector('[slot="nombre"]');
            const descSlot = tarjeta_perfil.querySelector('[slot="descripcion"]');

            if (nombreSlot && nombre.trim() !== '') {
                nombreSlot.textContent = nombre;
            }
            if (descSlot && descripcion.trim() !== '') {
                descSlot.textContent = descripcion;
            }
        });

        this.shadowRoot.querySelector("form").addEventListener("submit", (e)=>{
            e.preventDefault();
        });
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define('personalizador-perfil', PersonalizadorPerfil);