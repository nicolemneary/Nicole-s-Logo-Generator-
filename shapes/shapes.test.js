// Import the Triangle, Circle, and Square classes from the shapes module.
import { Triangle, Circle, Square } from './shapes.js';

// Use the describe function to group tests related to the Shapes functionality.
describe('Shapes', () => {
  // Test case for verifying the correct rendering of a Triangle object.
  test('Triangle should render correctly', () => {
    // Create a new Triangle instance with center at (0,0) and side length of 100.
    const triangle = new Triangle(0, 0, 100);
    // Define the expected SVG path string for the triangle.
    const expected = '<path d="M 0 -43.30127018922193 L -50 43.30127018922193 L 50 43.30127018922193 Z" />';
    // Use expect and toBe to assert that the rendered triangle matches the expected SVG path.
    expect(triangle.render()).toBe(expected);
  });

  // Test case for verifying the correct rendering of a Circle object.
  test('Circle should render correctly', () => {
    // Create a new Circle instance with center at (0,0) and radius of 50.
    const circle = new Circle(0, 0, 50);
    // Define the expected SVG circle element string for the circle.
    const expected = '<circle cx="0" cy="0" r="50" />';
    // Use expect and toBe to assert that the rendered circle matches the expected SVG element.
    expect(circle.render()).toBe(expected);
  });

  // Test case for verifying the correct rendering of a Square object.
  test('Square should render correctly', () => {
    // Create a new Square instance with center at (0,0) and side length of 100.
    const square = new Square(0, 0, 100);
    // Define the expected SVG rect element string for the square.
    const expected = '<rect x="-50" y="-50" width="100" height="100" />';
    // Use expect and toBe to assert that the rendered square matches the expected SVG element.
    expect(square.render()).toBe(expected);
  });
});

