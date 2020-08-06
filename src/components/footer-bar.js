class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        .footer{
            text-align: center;
            padding: 20px;
            background-color: #1C212E;
            color: white;
            font-size: 14px;
            margin: 0;
        }
        a{
            text-decoration: none;
            color: white;
        }
        </style>
        <p class="footer">Dibuat dengan penuh cinta by @<a href="https://github.com/naufalyukafi" rel="shortcut icon">Naufal Yukafi</a></p>
      `;
  }
}

customElements.define("footer-bar", FooterBar);
