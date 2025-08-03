export default class Walker {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    stroke(
      this.#randomNum255(),
      this.#randomNum255(),
      this.#randomNum255(),
      75
    );
  }

  offScreen() {
    if (this.x > width || this.y > height || this.x < 0 || this.y < 0) {
      return true;
    }
    return false;
  }

  #randomNum255() {
    return Math.floor(Math.random() * 255);
  }

  show() {
    point(this.x, this.y);
    strokeWeight(10);
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
