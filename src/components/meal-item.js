class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set meal(meal) {
    this._meal = meal;
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
                margin-bottom: 20px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
                min-widht: 50px;
             }

             .container-meal{
               display: flex; 
             }
            
             .fan-art-meal {
                 width: 50%;
                 max-height: 300px;
                 object-fit: cover;
                 object-position: center;
             }
            
             .meal-info {
                 padding: 24px;
             }
            
             .meal-info > h2 {
                 font-weight: lighter;
             }
            
             .meal-info > p {
                 margin-top: 10px;
                 overflow: hidden;
                 text-overflow: ellipsis;
                 display: -webkit-box;
                 -webkit-box-orient: vertical;
                 -webkit-line-clamp: 10; /* number of lines to show */
             }
             button a {
              text-decoration: none;
              color: #fff
             }
             button {
              margin-top: 10px;
              background-color: #1C212E;
              padding: 10px;
              border-radius: 5px;
             }
             @media screen and (max-width: 550px){
              .container-meal{
                display: block; 
              }
              .fan-art-meal {
                width: 100%;
            }
            }

         </style>
         <div class="container-meal">
            <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art">
            <div class="meal-info">
                <h2>${this._meal.strMeal}</h2>
                <p>Ingridients: ${this._meal.strInstructions}</p>
                <button><a href=${this._meal.strYoutube}>Video Tutorial</a></button>
            </div>
         </div>
         `;
  }
}

customElements.define("meal-item", MealItem);
