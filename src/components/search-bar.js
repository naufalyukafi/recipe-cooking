class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .search-container {
        display: block;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        border-radius: 5px;
        background-color: white; 
    }
    .search-container > input {
        width: 100%;
        padding: 16px;
        border: 0;
        margin-bottom: 12px;
        border-bottom: 1px solid #1C212E;
        font-weight: bold;
    }
    .search-container > input:focus {
        outline: 0;
        border-bottom: 2px solid #1C212E;
    }
    .search-container > input:focus::placeholder {
        font-weight: bold;
    }
    .search-container >  input::placeholder {
        color: #1C212E;
        font-weight: normal;
    }
    .search-container > button {
        width: 100%;
        cursor: pointer;
        margin-left: auto;
        padding: 16px;
        background-color: #1C212E;
        color: white;
        border: 0;
        text-transform: uppercase;
    }
    button:hover{
      background-color: black;
      font-weight: bold;
    }
    @media screen and (max-width: 550px){
        .search-container {
            flex-direction: column;
            position: static;
        }
        .search-container > input {
            margin-bottom: 12px;
        }
    }
    </style>
    <div id="search-container" class="search-container">
        <input placeholder="Search by Name Cooking in Here..." id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
    </div>
    `;
    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
