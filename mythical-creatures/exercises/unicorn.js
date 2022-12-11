class Unicorn {
  constructor(name, color) {
    console.log(color)
    this.name = name;
    if (color === undefined) {
      this.color = 'white';
    } else {
      this.color = color;
    }
  }
  isWhite() {
    console.log(this.color);
    if (this.color !== 'white') {
      return false;
    }
  }
  says(message) {
    return `**;* ${message} *;**`;
  }
}

module.exports = Unicorn;


//read the test
// ask if it will fail and why
// run the test
// make it pass
