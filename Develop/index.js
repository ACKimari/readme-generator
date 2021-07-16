// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Project name',
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
    }
    {
        type: 'list',
        name: 'License',
        message: 'Choose a License:',
        choices: ['MIT', 'Other','GPLv2', 'Apache', 'None'],
    }
    {
        type:
        name:
        message:
    }
    {
        type:
        name:
        message:
    }
    {
        type:
        name:
        message:
    }
    {
        type:
        name:
        message:
    }
    {
        type:
        name:
        message:
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
