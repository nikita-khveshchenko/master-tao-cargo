class BurgerMenu {
  selectors = {
    overlay: "[data-js-overlay]",
    burgerButton: "[data-js-burger-button]"
  }

  stateClasses = {
    isActive: "is-active"
  }

  constructor() {
    this.overlayElement = document.querySelector(this.selectors.overlay);
    this.burgerButtonElement = document.querySelector(this.selectors.burgerButton);
    this.init();
  }

  onClickBurgerButton = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
  }

  init() {
    this.burgerButtonElement.addEventListener("click", this.onClickBurgerButton)
  }
}

export default BurgerMenu;