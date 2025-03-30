// TODO: Include packages needed for this application
import { writeFile } from 'fs/promises';
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';
// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
    {
        type : 'input',
        message : 'What is the title of the README file?',
        name: 'title',
    },
    {
        type: 'input',
        message: `Enter a Description of your project`,
        name: 'description',
    },

    {
        type: 'input',
        message: `Enter the Installation Instructions for your project`,
        name: 'installation',
    },

    {
        type: 'input',
        message: `Enter the Usage Instructions for your project`,
        name: 'usage',
    },

    {
        type: 'list',
        message: `Choose a License for your project`,
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3']
    },

    {
        type: 'input',
        message: `Enter the Contributors for your project`,
        name: 'contributing',
    },

    {
        type: 'input',
        message: `Enter directions for Testing your project`,
        name: 'tests',
    },

    {
        type: 'input',
        message: `Enter your Github username`,
        name: 'github',

    },
    {
        type: 'input',
        message: `Enter your email address`,
        name: 'email',

    }

])}
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}
    promptUser()
    .then((answers) => writeFile('generateMarkdown.md', generateMarkdown(answers)))
// Function call to initialize app
init();
