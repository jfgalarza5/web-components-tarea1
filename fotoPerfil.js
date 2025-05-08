class fotoPerfil extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = /*html*/ `
        <div class="container">
            <img id="foto">
            <div class="nombre"><slot name="nombre"></slot></div>
            <div class="descripcion"><slot name="descripcion"></slot></div>
        </div>
        `;
        return template;
    }
}