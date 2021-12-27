class Shape {
   
    constructor(color) {
        this.color = "RED";
    }

    drawShape() {
        console.log(`${this.color} is colored`);

    }
    calculateArea() {
        console.log(`${this.color}  area is to be calculated`)
    }

}
module.exports = Shape
 let Shape = require('./shape')


export class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    calculateArea() {
        console.log(`${this.color}  area is calculated`)

    }
}
