# Nicole's Logo Generator
## HW #10 Object Oriented Programing 

<br>
This is an SVG Logo Maker created for the module 10 challenge! 
<br>

<br>
This application does not launch in a browser and instead uses a console line interface via Node.js <br>
<br>
Dependencies required: <br>
<br>

[Node.js](https://www.nodejs.org/en) <br>
[Inquirer](https://www.npmjs.com/package/inquirer) <br>
<br>

 [Jest](https://www.npmjs.com/package/jest) 

Finally, because the main functionality of the project is using ES6 modules for imports and exports and jest is only compatible with common JS 
imports and exports, the project additionally uses [babel-jest](https://www.npmjs.com/package/babel-jest) to handle the import / export conversions. 

<br>


<br>
<br>

## User Story
<code>
AS a freelance web developer<br>
I WANT to generate a simple logo for my projects<br>
SO THAT I don't have to hire a graphic designer<br>
</code>

## Acceptance Criteria
GIVEN a command-line application that accepts user input<br>

WHEN prompted for text<br>
THEN I can enter up to three characters<br>

WHEN prompted for text color<br>
THEN I can choose a color by keyword or hexadecimal code<br>

WHEN prompted for a shape<br>
THEN I choose from: circle, triangle, square<br>

WHEN prompted for the shape's color<br>
THEN I can choose a color by keyword or hexadecimal code<br>

AFTER all inputs are provided<br>
THEN a `logo.svg` file is created<br>
AND "Generated logo.svg" is displayed in the command line<br>

WHEN I view `logo.svg` in a browser<br>
THEN I see a 300x200 pixel image reflecting my choices<br>
<br>

## Tests Passing
<br>
<p align="left">
  <img src=images/tests.png>
</p>

<br>
<br>
