class PersonalizadorPerfil extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = /*html*/ `
        <form>
            <label>Fondo: <input type="color" id="color" value="#fff"></label>
            <label>Foto de perfil: <input type="text" id="img" placeholder="https://imagen.jpg"></label>
            <label>Nombre: <input type="text" id="nombre" placeholder="Ingresa tu nombre"></label>
            <label>Descripcion: <input type="text" id="descripcion" placeholder="Ingresa tu descripcion"></label>
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
                gap: 10px;
                padding: 10px;
                margin-top: 1em;
                border: 1px solid #ccc;
                border-radius: 10px;
                width: 220px;
            }
            input, button {
                padding: 5px;
                font-size: 14px;
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
            console.log();
            
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