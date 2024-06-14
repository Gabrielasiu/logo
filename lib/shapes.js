//aqui van las clases de las figuras circle/trian/rect
class Shape {
    constructor(){this.color=""};
    shapeColor (color) {
        this.color= color
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" /> ` 
    }
}

class Triangle extends Shape {
    render () {
        return   `<polygon points = "150, 18 244, 182 56, 182" fill="${this.color}" /> ` 
    }
}

class Square extends Shape {
    render () {
        return   `<rect x="90" y="40" width="120" height="120" fill="${this.color}" /> `
    }
}
    

module.exports ={
    Circle,
    Triangle,
    Square
};

// la nueva constante circle va a ser un nuevo circulo con propiedades añadidsas por el input 
const circle = new Circle();
circle.shapeColor("yellow");
console.log(circle.render());

const polygon = new Triangle();
polygon.shapeColor("pink");
console.log(polygon.render());

const square = new Square();
square.shapeColor("yellow");
console.log(square.render());