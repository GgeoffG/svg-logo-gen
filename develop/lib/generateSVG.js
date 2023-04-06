const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

let shapeSvg 
function renderClass(shape) {
    switch(shape){
        case 'circle':
        shapeSvg= new Circle()
            break;
        case 'square':
            shapeSvg= new Square()
            break;
        case 'triangle':
            shapeSvg = new Triangle()
            break;
    }
}



function generateSVG (data) {
    renderClass(data.shape);
return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${shapeSvg.render(data.fill)}

<text x="150" y="150" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.text}</text>

</svg>`
}

module.exports= generateSVG