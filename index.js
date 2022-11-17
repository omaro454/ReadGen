// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = () => {
    data = []
    return inquirer.prompt([
    
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title? (Required)',
            validate: titleinput => {
                if (titleinput) {
                    return true;
                } else {
                    console.log('Please enter a title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a project description.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the instructions for installation?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide examples and instructions for use.'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Which licenses? Choose all that apply.',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who were the contributing developers?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'List some tests for your application.'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username? (Required)',
            validate: userinput => {
                if (userinput) {
                    return true;
                } else {
                    console.log('Please enter a Github username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ])

};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }
  
// Function call to initialize app
init();
