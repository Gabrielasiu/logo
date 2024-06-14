// Runs the app using the lib imports


// // TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const shapes = require('./lib/shapes')
//pasar las clases que escribí en shapes
// {Circle, Square, Triangle} = require('./lib/shapes');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: "Enter up to 3 characters for your logo" ,
    name: 'text',
},
{
    type: 'input',
    message: "Enter a color keyword or hexadecimal number, for your text",
    name: 'textColor' 
},
{
    type: 'input',
    message: "Enter a color keyword or hexadecimal number, for your logo",
    name: 'bgColor'
},
{
    type: 'list',
    message: "Choose the form of your logo",
    name: 'shape',
    choices: ["Circle", "Triangle", "Square"]
}
];

function inquireFunc (){
    inquirer
        .prompt(questions)
        .then(function(answers){
            writeToFile("./lib/newLogo.svg/logo.svg", answers)
        })
}
// TODO: Create a function to create a logo
function writeToFile(fileName, data) {
const textColor = data.textColor;
const bgColor = data.bgColor;
const text = data.text;
const logo = new shapes[data.shape](textColor,bgColor, text);


fs.writeFile(fileName, logo.render(), err => {
   if (err) console.error(err);
   else console.log(`Generated logo.svg"\n Find your logo inside 
   the ${fileName} directory`); 
   
});
}

// TODO: Create a function to initialize app
function init() {
    inquireFunc();
}

// Function call to initialize app
init();

