const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path');

const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
        {
            type:'input',
            message:'Enter a title for your project:',
            name:'title',
            default:'Project title',
        },
        {
            type:'input',
            message:'Enter your project desciption:',
            name:'description',
        },    
        {
            type:'input',
            message:'Please enter an installation guide if needed:',
            name:'installation',
        },
        {
            type:'input',
            message:'Provide instructions and examples for use. Include screenshots as needed.',
            name:'usage',
        },
        {
            type:'input',
            message:'List your collaborators, 3rd-party assets, or tutorials if any, with links to their GitHub profiles, primary web presence, or links to tutorial material.',
            name:'credits',
        },
        {
            type:'input',
            message:'Enter any licenses you may want to apply to your project here:',
            name:'licenses',
        },
        {
            type:'input',
            message:'Provide examples of how to test code here:',
            name:'tests',
        }
]
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile('README.md', generateMarkdown({...response}))
    })
}

// function call to initialize program
init();
