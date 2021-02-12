const inquirer = require('inquirer');
const fs = require('fs')
const markDown = require('./utils/markDown');
const { type } = require('os');
// array of questions for user
const questions = [
{
    type: "input",
    message: "what is the title for your project?",
    name: "Title",
},
{
    type: "input",
    message: "PLease give description of your project",
    name: "description",
},
{
    type: "input",
    message: "What are neccessary dependancies for this application",
    name: "Installation",
},
];
console.log(questions)
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
