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
    this.render();
  };

  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `siunčiama...`;
    } else {
      this.htmlElement.innerHTML = `parsiusta...`;
    }
  };
}
