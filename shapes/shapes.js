// Define a Triangle class for creating triangle shapes
export class Triangle {
  // Constructor to initialize the triangle with its center (x, y) and side length
  constructor(x, y, side) {
    this.x = x; // Center x-coordinate
    this.y = y; // Center y-coordinate
    this.side = side; // Length of each side of the triangle
  }

  // Method to render the triangle as SVG path with an optional color
  render(color) {
    // Calculate the height of the triangle using the Pythagorean theorem
    const height = (Math.sqrt(3) / 2) * this.side;
    // Construct the path command to draw the triangle in SVG
    const path = `M ${this.x} ${this.y - height / 2} ` + // Move to top vertex
                 `L ${this.x - this.side / 2} ${this.y + height / 2} ` + // Line to bottom left vertex
                 `L ${this.x + this.side / 2} ${this.y + height / 2} ` + // Line to bottom right vertex
                 `Z`; // Close the path to form a triangle
    // Conditionally apply the fill color if specified
    const fill = color ? `fill="${color}"` : '';
    // Return the SVG path element as a string
    return `<path d="${path}" ${fill}/>`;
  }
}

// Define a Circle class for creating circle shapes
export class Circle {
  // Constructor to initialize the circle with its center (cx, cy) and radius (r)
  constructor(cx, cy, r) {
    this.cx = cx; // Center x-coordinate
    this.cy = cy; // Center y-coordinate
    this.r = r;  // Radius of the circle
  }

  // Method to render the circle as SVG circle with an optional color
  render(color) {
    // Conditionally apply the fill color if specified
    const fill = color ? `fill="${color}"` : '';
    // Return the SVG circle element as a string
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" ${fill}/>`;
  }
}

// Define a Square class for creating square shapes
export class Square {
  // Constructor to initialize the square with its center (x, y) and side length
  constructor(x, y, side) {
    this.x = x; // Center x-coordinate
    this.y = y; // Center y-coordinate
    this.side = side; // Length of each side of the square
  }

  // Method to render the square as SVG rect with an optional color
  render(color) {
    // Conditionally apply the fill color if specified
    const fill = color ? `fill="${color}"` : '';
    // Return the SVG rect element as a string, adjusting position to keep the square centered
    return `<rect x="${this.x - this.side / 2}" y="${this.y - this.side / 2}" width="${this.side}" height="${this.side}" ${fill}/>`;
  }
}
