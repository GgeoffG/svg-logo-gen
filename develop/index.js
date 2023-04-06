const inquirer = require("inquirer");
const fs= require('fs')
const generateSVG = require('./lib/generateSVG')


const userPrompt = () => {
    return inquirer.prompt(
        [
        {
            type: 'input',
            message:'Use up to 3 characters for your logos text',
            name: "text"
        },
        
        {
            type: 'input',
            message: 'Input a color or hex code for your text',
            name: 'textcolor',
        },
        {
            type:'rawlist',
            message: 'select a shape for your logo',
            choices:['circle','square','triangle'],
            name: 'shape'
        },
        {
            type:'input',
            message: 'Input a color or hex code for your shape',
            name:'fill'

        }
    ]
    )
}

const writeToFile= (fileName,generate) => {
    fs.writeFile(fileName, generate, (err) =>
    err ? console.log (err) : console.log ('Generated logo.svg')
    )
}

async function init() {
    const answers = await userPrompt();
    if (answers.text.length < 4){
    writeToFile('logo.svg',generateSVG(answers))
    }
    else
    console.log('please use no more than 3 characters in your logo text.')
}
init()