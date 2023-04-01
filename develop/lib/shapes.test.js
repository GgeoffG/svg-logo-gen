const shapes = require("./shapes.js");
const Circle = require("./circle.js");

describe("shaperendered", () => {
  describe("circle", () => {
    it("should return svg for circle",
      () => {
        const shape = new Circle();

        expect(shape.render()).toEqual(
          `<circle cx="150" cy="100" r="80" fill="blue" />`
        );
      });
  });

  describe("triangle", () => {
    it("should return svg for circle",
      () => {
        const shape = new Triangle();

        expect(shape.render()).toEqual(
          `<circle cx="150" cy="100" r="80" fill="blue" />`
        );
      });
  });
  describe("square", () => {
    it("should return svg for circle",
      () => {
        const shape = new Square();

        expect(shape.render()).toEqual(
          `<circle cx="150" cy="100" r="80" fill="blue" />`
        );
      });
  });

});
