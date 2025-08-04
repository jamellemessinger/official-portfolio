export default class Walker {
  constructor(p5Instance) {
    this.p5Instance = p5Instance;
    this.width = this.p5Instance.windowWidth;
    this.height = this.p5Instance.windowHeight;
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;
    this.p5Instance.stroke(
      this.#randomNum255(),
      this.#randomNum255(),
      this.#randomNum255(),
      75
    );
  }

  offScreen() {
    if (
      this.x > this.width ||
      this.y > this.height ||
      this.x < 0 ||
      this.y < 0
    ) {
      return true;
    }
    return false;
  }

  #randomNum255() {
    return Math.floor(Math.random() * 255);
  }

  show() {
    this.p5Instance.point(this.x, this.y);
    this.p5Instance.strokeWeight(10);
  }

  move() {
    let decision = Math.floor(Math.random() * 4);

    switch (decision) {
      case 0:
        this.x += 10;
        break;
      case 1:
        this.x -= 10;
        break;
      case 2:
        this.y += 10;
        break;
      case 3:
        this.y -= 10;
        break;
      default:
        this.x += 5;
        break;
    }
  }
}
