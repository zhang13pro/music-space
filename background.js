const ease = {
  exponential: 0,
};

class ShapeOverlays {
  constructor(elm) {
    this.elm = elm;
    this.path = elm.querySelectorAll("path");
    this.numPoints = 4;
    this.duration = 800;
    this.delayPointsArray = [];
    this.delayPointsMax = 180;
    this.delayPerPath = 70;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }

  toggle() {
    this.isAnimating = true;
    const range = Math.random() * Math.PI * 2; // [0-360)弧度值
    for (let i = 0; i < this.numPoints; i++) {
      const radian = (i / (this.numPoints - 1)) * Math.PI * 2;
      this.delayPointsArray[i] =
        ((Math.sin(radian + range) + 1) / 2) * this.delayPointsMax;
    }
    this.isOpened ? this.close() : this.open();
  }

  open() {
    this.isOpened = true;
    this.elm.classList.add("is-opened");
    this.timeStart = Date.now();
    this.renderLoop();
  }
  close() {
    this.isOpened = false;
    this.elm.classList.remove("is-opened");
    this.timeStart = Date.now();
    this.renderLoop();
  }

  render() {
    if (this.isOpened) {
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute("d", this.updatePath(Date.now()));
      }
    } else {
    }
  }

  renderLoop() {
    this.render();
    // 判断条件是怎么来的
    let flag =
      Date.now() - this.timeStart <
      this.duration +
        this.delayPerPath * (this.path.length - 1) +
        this.delayPointsMax;

    flag
      ? requestAnimationFrame(() => this.renderLoop())
      : (this.isAnimating = false);
  }
}
