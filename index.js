// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the project title?'
    },
    {
        name: 'description',
        message: 'What is the description?'
    },
    {
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        name: 'usage',
        message: 'What is the usage information?'
    },
    {
        name: 'contributing',
        message: 'What are the contribution guidelines?'
    },
    {
        name: 'tests',
        message: 'What are the test instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license?',
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'The Unilicense'
        ]
    },
    {
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        name: 'email',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('Success!')
);}
// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
    /* Pass your questions in here */
  .then((answers) => {
      writeToFile('README.md', genMD(answers))
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
