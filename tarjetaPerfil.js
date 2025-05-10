class tarjetaPerfil extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }
  static get observedAttributes() {
    return ['tema'];
  }
  getTemplate(){
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
    <div class="container">
        <img id="foto">
        <div class="nombre"><slot name="nombre"></slot></div>
        <div class="descripcion"><slot name="descripcion"></slot></div>
    </div>
    ${this.getStyle()}
    `;
    return template;
  }
  getStyle(){
    return /*css*/ `
    <style>
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        background-color: #f0f0f0;
        border-radius: 12px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        width: 200px;
      }
      .container img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 1em;
      }
      .nombre {
        font-weight: bold;
        margin-bottom: 8px;
      }
      .descripcion {
        font-size: 10;
        color: #555;
        text-align: center;
      }
      //
    </style>
    `;
  }
  render(){
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    this.shadowRoot.getElementById("foto").src = this.getAttribute("src");
    this.shadowRoot.querySelector(".container").style.backgroundColor = this.getAttribute("tema");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'src' && this.shadowRoot) {
      const src = this.shadowRoot.getElementById('foto').src;
      if (src) src = newValue;
    }
    if (name === 'tema' && this.shadowRoot) {
      const contenedor = this.shadowRoot.querySelector('.container');
      if (contenedor) contenedor.style.backgroundColor = newValue;
    }
  }
  connectedCallback(){
    this.render();
  }
}
customElements.define("tarjeta-perfil", tarjetaPerfil);