//imports
const inquirer = require('inquirer');
const fs = require('fs')
const markDown = require('./utils/markDown');
// array of questions for user
const questions = [
    {
        type: "input",
        message: "what is the title for your project?",
        name: "Title",
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "UserName"

    },
    {
        type: "input",
        message: "Please give description of your project.",
        name: "Description",
    },
    {
        type: "input",
        message: "What are neccessary dependancies for this application?",
        name: "Installation",
    },
    {
        type: "input",
        message: "How is this project used?",
        name: "Usage",
    },
    {
        type: "list",
        message: "Choose license for this project: ",
        name: "License",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
        ]
    },
    {
        type: "input",
        message: "Who all is contributing to this project?",
        name: "Contributing",
    },
    {
        type: "input",
        message: "how do you test this project?",
        name: "Test",
    },
    {
        type: "input",
        message: "What to do if users have questions?",
        name: "Questions",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email",
    },
];

// function to write README file
function writeToFile(fileName, data, folderName) {
    const path = folderName ? `./${folderName}/${fileName}` : fileName
    fs.writeFile(path, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", markDown(data), "Demo-Folder");
    });
};

// function call to initialize program
init();
