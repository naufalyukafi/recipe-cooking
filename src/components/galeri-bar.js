import dataGaleri from "../script/data/data-galeri.js";
console.log(dataGaleri[0].strMeal);
class GaleriBar extends HTMLElement {
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
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            overflow: hidden;
          }

          .container-meal{
            justify-content: center;
            align-items: center;
            display: flex;
          }

          .fan-art-meal {
            width: 30%;
            padding: 10px;
            object-fit: cover;
            object-position: center;
          }

          h3 {
            text-align: center;
            padding: 20px;
          }
        </style>  
        <h3>Galery</h3>
          <div class="container-meal">
              <img class="fan-art-meal" src="${dataGaleri[0].strMealThumb}" alt="gambar" />
              <img class="fan-art-meal" src="${dataGaleri[1].strMealThumb}" alt="gambar" />
              <img class="fan-art-meal" src="${dataGaleri[2].strMealThumb}" alt="gambar" />
          </div>
          <br><br><br>        
          `;
  }
}

customElements.define("galeri-bar", GaleriBar);
