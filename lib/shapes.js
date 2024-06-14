//aqui van las clases de las figuras circle/trian/rect
class Shape {
    constructor(bgColor, textColor, message) { 
        this.bgColor = bgColor;
        this.textColor = textColor;
        this.message = message;
    };
    // shapeColor(color) {
    //     this.color = color
    // }
    // ShapeMessage(message) {
    //     this.message = message

    // }
};
// shapeText (message) {
//     this.message= message



class Circle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.bgColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.message}</text>
      
      </svg>`
    }
}

class Triangle extends Shape {
    render() {
       return ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

       <polygon points = "150, 18 244, 182 56, 182" fill="${this.bgColor}" />
     
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.message}</text>
     
     </svg>`
    }
}

class Square extends Shape {
    render() {
       return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="90" y="40" width="120" height="120" fill="${this.bgColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.message}</text>
      
      </svg>` 
    }
}


module.exports = {
    Circle,
    Triangle,
    Square
};

// // la nueva constante circle va a ser un nuevo circulo con propiedades añadidsas por el input 
// const circle = new Circle();
// //circle.shapeColor("yellow");
// console.log("CIRCULO: ", circle.render());

// const polygon = new Triangle();
// //polygon.shapeColor("pink");
// console.log("TRIANGULO: ", polygon.render());

// const square = new Square();
// //square.shapeColor("yellow");
// console.log("CUADRADO: ", square.render());