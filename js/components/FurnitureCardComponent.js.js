class furnitureCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }
  init = () => {
    const {
      title,
      type,
      price,
      location: { country, city, street },
      owner: { fullname, mobile, address, email },
      imgSrc,
    } = this.props;
    this.htmlElement = document.createElement("article");
    this.htmlElement.className = "card p-3 shadow";
    this.htmlElement.innerHTML = `
    <img src="${imgSrc}" class="card-img-top">
    <div class="card-body">
        <h2 class="h5">${title}</h2>
        <ul style="list-style-type: none">
        <li>
          <span>Tipas:</span>
          <strong>${type}</strong>
        </li>
        <li>
        <span>Kaina:</span>
        <strong>${price}</strong>
        </li>
        <li>
        <span>Gamybos šalis:</span>
        <strong>${country}</strong>
        </li>
        <li>
        <span>Adresas:</span>
        <strong>${street}, ${city}</strong>
        </li>
       
        </ul>

        <h2 class="h5">Pardavėjo kontaktai</h2>
        <ul style="list-style-type: none">
        <li>
        <span>Pardavėjas:</span>
        <span></span>
        <strong>${fullname}</strong>
        </li>
        <li>
        <span>Telefono nr.:</span>
        <strong>${mobile}</strong>
        </li>
        <li>
        <span>Adresas:</span>
        <strong>${address}</strong>
        </li>
        <li>
        <span>El.paštas:</span>
        <strong>${email}</strong>
        </li>
        </ul>
        </div>
        <button class="btn btn-danger">Ištrini</button>`;
    const btn = this.htmlElement.querySelector(".btn");
    btn.addEventListener("click", onDelete);
  };
}
