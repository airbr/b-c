class Bc extends HTMLElement {
    static get observedAttributes() {
      return ['width'];
    }
    constructor() {
      super();

      let template = document.getElementById("bcsvg");
      console.log(template);
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
    get width() {
      return this.hasAttribute && this.getAttribute('width');
    }
    set width(val) {
      if (val) {
        this.setAttribute('width', val)
      } else {
        this.removeAttribute('width');
      }
    }
    attributeChangedCallback(name, oldValue, newValue) {
      const icon = document.getElementById('bc');
      if (name === 'width') {
        if (newValue !== oldValue) {
          icon.style.width =
            newValue.includes('px') ? newValue : `${newValue}px`;
        }
      }
    }
  }

  customElements.define('b-c', Bc);