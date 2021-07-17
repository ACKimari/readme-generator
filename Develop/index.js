// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is your repo name on Github?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'checkbox',
        name: 'contents',
        message: 'Check all that apply',
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to create your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'usage?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a License:',
        choices: ['MIT', 'Other','GPLv2', 'Apache', 'None'],
    },
    {
        type:'input',
        name: 'contributions',
        message: 'credits:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do I run a test?',
    },
    {
        type: 'checkbox',
        name: 'questions',
        message: 'How would you like to be contacted?',
        choices: ['Github profile', 'email'],
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
        writeToFile("output/generatedREADME.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
