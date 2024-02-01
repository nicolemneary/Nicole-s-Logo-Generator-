// Import the array of color names from a local file for color validation
import { coloursArray } from './coloursArray.js';
// Import Node.js file system module for file operations
import fs from 'fs';
// Import Node.js path module for handling file paths
import path from 'path';
// Define the directory name of the current module
const __dirname = path.resolve();
// Import inquirer module for interactive command line prompts
import inquirer from 'inquirer';
// Import shape classes from a local file to use in SVG creation
import { Triangle, Circle, Square } from './lib/shapes.js';

// Set the width and height for the SVG canvas
const canvasWidth = 300;
const canvasHeight = 200;

// Begin interactive prompts for user input using inquirer
inquirer
  .prompt([
    {
      // Prompt for entering text up to three characters
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3, // Validation to ensure input is 3 characters or less
    },
    {
      // Prompt for entering text color, either by name or hexadecimal value
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (hexadecimal, i.e.#CD5C5C) or keyword (refer to coloursArray.js)):',
      validate: (input) => {
        // Validate input against the coloursArray and check if it's a valid hexadecimal color
        const isColorName = coloursArray.includes(input.toLowerCase());
        const isHexCode = /^#[0-9A-F]{6}$/i.test(input);
        return isColorName || isHexCode;
      },
    },
    {
      // Prompt for choosing a shape from a list of options
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      // Prompt for entering the color of the shape, similar to text color prompt
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (hexadecimal or keyword):',
      validate: (input) => {
        // Validate input for shape color similar to text color validation
        const isColorName = coloursArray.includes(input.toLowerCase());
        const isHexCode = /^#[0-9A-F]{6}$/i.test(input);
        return isColorName || isHexCode;
      },
    },
  ])
  .then((answers) => {
    let shape; // Placeholder for the shape object
    // Define text attributes and methods for rendering the text within SVG
    const text = {
      _attributes: {
        x: canvasWidth / 2, // Center text horizontally
        y: canvasHeight / 1.35, // Adjust vertical position of text, specific adjustments in switch case
        'text-anchor': 'middle', // Ensure text is centered at its position
        fill: answers.textColor, // Text color as entered by the user
      },
      _text: answers.text.toUpperCase(), // Convert input text to uppercase
      
      // Function to render the text element as SVG markup
      render: function() {
        return ` 
          <text x="${this._attributes.x}" y="${this._attributes.y}" 
                text-anchor="${this._attributes['text-anchor']}"
                fill="${this._attributes.fill}" font-size="${fontSize}">
            ${this._text}
          </text>
        `;
      },
    };
    // Variable to adjust font size based on shape
    let fontSize;
    // Determine shape based on user input and set specific attributes
    switch (answers.shape) {
      case 'Circle':
        // Calculate circle radius and adjust text settings
        const circleRadius = Math.min(canvasWidth, canvasHeight) * 0.45;
        shape = new Circle(canvasWidth / 2, canvasHeight / 2, circleRadius);
        text._attributes.y = canvasHeight / 1.65;
        fontSize = 58;
        break;
      case 'Triangle':
        // Calculate triangle height and adjust text settings
        const triangleHeight = Math.min(canvasWidth, canvasHeight) * 1.1;
        shape = new Triangle(canvasWidth / 2, canvasHeight / 2, triangleHeight);
        fontSize = 52;
        break;
      case 'Square':
        // Calculate square size and adjust text settings
        const squareSize = Math.min(canvasWidth, canvasHeight) * 0.8;
        shape = new Square(canvasWidth / 2, canvasHeight / 2, squareSize);
        text._attributes.y = canvasHeight / 1.65;
        fontSize = 60;
        break;
    }

    // Assemble the SVG data with shape and text elements
    const svgData = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${canvasWidth}" height="${canvasHeight}">
        ${shape.render(answers.shapeColor)}
        ${text.render()}
      </svg>`;

    // Write the SVG data to a file named logo.svg in the current directory
    fs.writeFileSync(`${__dirname}/logo.svg`, svgData.toString());

    // Log a message to the console to indicate successful SVG creation
    console.log('Generated logo.svg');
  })
  .catch((error) => {
    // Log any errors encountered during the process
    console.error(error);
  });

