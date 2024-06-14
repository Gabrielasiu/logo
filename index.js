// Runs the app using the lib imports


// // TODO: Include packages needed for this application
const inquirer =require ('inquirer');
const fs = require ('fs');
//pasar las funcione que escribí en shapes
//const {Circle, Square, Triangle} = require('./lib/shapes');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: "Enter up to 3 characters for yout logo" ,
    name: 'text',
},
{
    type: 'input',
    message: "Enter a color keyword or hexadecimal number, for your logo",
    name: 'color'
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
const logoContent = generateLogo(data);

fs.writeFile(fileName, data, err => {
   if (err) console.error(err);
   else console.log(`Thanks for using the logoGenerator\n Find your logo inside 
   the ${fileName} directory`); 
});
}

// TODO: Create a function to initialize app
function init() {
    inquireFunc();
}

// Function call to initialize app
init();