const inquirer = require('inquirer')



// array of questions for user
const questions = [
        {
            type:'input',
            message:'What is your GitHub username?',
            name:'username',
            default:'JoeyFlygare',
        },
        {
            type:'input',
            message:'What the name of your repository?',
            name:'repository',
            default:'NodeREADMEGenerator',
        },
        {
            type:'input',
            message:'Enter a title for your project:',
            name:'title',
            default:'Project title',
        },
        {
            type:'input',
            message:'Enter your project desciption:',
            name:'username',
            default:'JoeyFlygare',
        },
        {
            type:'input',
            message:'Please enter an installation guide if needed',
            name:'Installation',
        },
        {
            type:'input',
            message:'Provide instructions and examples for use. Include screenshots as needed.',
            name:'Usage',
        },
        {
            type:'input',
            message:'List your collaborators, 3rd-party assets, or tutorials if any, with links to their GitHub profiles, primary web presence, or links to tutorial material.',
            name:'Credits',
        },
        {
            type:'input',
            message:'Enter any licenses you may want to apply to your project here:',
            name:'Licenses',
        },
        {
            type:'input',
            message:'Provide examples of how to test code here:',
            name:'Tests',
        }
]
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
