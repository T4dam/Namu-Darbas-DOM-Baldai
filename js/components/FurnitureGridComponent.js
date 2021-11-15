class FurnitureGridComponent {
  constructor() {
    this.state = {
      loading: false,
      furniture: [],
    };
    this.init();
  }
  initFetch = () =>
    setTimeout(() => {
      API.fetchFurniture(
        (furniture) => {
          this.state.loading = false;
          this.saveFurniture(furniture);
        },
        (err) => {
          alert(err);
          this.state.loading = false;
          this.render();
        }
      );
    }, 1000);

  saveFurniture = (furniture) => {
    this.state.furniture = furniture;
    this.render();
  };

  init = () => {
    this.state.loading = true;
    this.initFetch();
    this.htmlElement = document.createElement("div");
    this.htmlElement.className = "row g-2";
    this.render();
  };

  wrapInColumn = (element) => {
    const column = document.createElement("div");
    column.className = `col-12 col-sm-6 col-md-4 col-lg-3`;
    column.append(element);
    return column;
  };

  render = () => {
    const { loading, furniture } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif" /></div>`;
    } else if (furniture.length > 0) {
      this.htmlElement.innerHTML = "";
      const furnitureElement = furniture
        .map((x) => new furnitureCardComponent(x))
        .map((x) => x.htmlElement)
        .map(this.wrapInColumn);
      this.htmlElement.append(...furnitureElement);
    } else {
      this.htmlElement.innerHTML = `<h2>Šiuo metu baldų nėra</h2>`;
    }
  };
}
