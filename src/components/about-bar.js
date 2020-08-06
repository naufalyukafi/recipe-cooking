class AboutBar extends HTMLElement {
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
          .about-me {
            text-align: center;
            padding: 20px;
            background-color: #343a40;
            color: white;
            font-size: 18px;
            margin: 0;
          }
          a{
              text-decoration: none;
              color: white;
          }
          img {
            width: 20%;
            border-radius: 8px;
          }
          @media screen and (max-width: 550px){
            img {
                width: 50%;
                border-radius: 8px;
            }
          }
          </style>
          <div class="about-me">
            <h3>Tentang Saya</h3>
            <img src="https://avatars3.githubusercontent.com/u/56672065?s=460&u=5fad09e5f435fd72cd83d8518722849ca45d5ee8&v=4" alt="halo" />
            <p>
                Halo Nama saya Naufal Yukafi, Saya suka dengan Web Developer dan
                Mobile Developer.
            </p>
          </div>
        `;
  }
}

customElements.define("about-bar", AboutBar);
