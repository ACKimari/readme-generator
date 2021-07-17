// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Github username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'Project Title',
        message: 'What is the name of your Project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'checkbox',
        name: 'Table of Contents',
        message: 'Check all that apply',
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests'],
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps to create your project?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'usage?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose a License:',
        choices: ['MIT', 'Other','GPLv2', 'Apache', 'None'],
    },
    {
        type:'input',
        name: 'Contribution',
        message: 'credits:',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'How do I run a test?'
    },
];

//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("You have successfully generated " +fileName + ".");
    })
}

//Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("outputREADME.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
