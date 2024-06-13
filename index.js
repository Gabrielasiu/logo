// Runs the app using the lib imports
// // TODO: Include packages needed for this application
const inquirer = require ('inquirer');
//const generateMarkdown = require ('./needed/readmeGenerator.js');
inquirer.registerPrompt('checkbox-plus', require('./index'));
const colors =require("colors")
const fs = require ('fs');

// TODO: Create an array of questions for user input
const shape = ["triangle", "circle", "square"]
const questions = [
{
    type: 'input',
    message: "What's your logo name? Ypu can write UP to 3 letters" ,
    //name: 'title',
},
{
    type: 'input',
    message: "What color do you want to present your logo's letetrs on",
    name: 'color'
},
{
    type: 'checkbox-plus',
    message: "Select the form of your logo" 
   // name: 'description',
}
];

function inquireFunc (){
    inquirer
        .prompt(questions)
        .then(function(answers){
            writeToFile("./lib/shapes.js", answers)
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