const managerModule = require("./lib/Manager");
const engineerModule = require("./lib/Engineer");
const internModule = require("./lib/Intern");
const Manager = managerModule.Manager;
const Engineer = engineerModule.Engineer;
const Intern = internModule.Intern;
const managerQuestions = managerModule.managerQuestions;
const engineerQuestions = engineerModule.engineerQuestions;
const internQuestions = internModule.internQuestions;
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully written to team.html!'));
};

const teamInput = [];

// Function to add an engineer
function addEngineer(){
    inquirer.prompt(engineerQuestions)
    .then((engineerResponse) => {
        const engineer = new Engineer(engineerResponse.engineer.name, engineerResponse.engineer.id, engineerResponse.engineer.email, engineerResponse.engineer.github);
            teamInput.push(engineer);  
            menu(); 
    })
}

function addIntern(){
    inquirer.prompt(internQuestions)
    .then((internResponse) => {
        const intern = new Intern(internResponse.intern.name, internResponse.intern.id, internResponse.intern.email, internResponse.intern.school);
            teamInput.push(intern);  
            menu(); 
    })

}

function menu(){
    inquirer.prompt([
                {
                type: 'list',
                message: 'Please select from the following:',
                choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
                name: 'menuChoice'
                }
     ])
     .then((menuResponse) => {
        if (menuResponse.menuChoice === 'Add an engineer'){
            addEngineer();
        }
        if (menuResponse.menuChoice === 'Add an intern'){
            addIntern()
        }
        if (menuResponse.menuChoice === 'Finish building the team'){
            let text = render(teamInput);
            writeToFile(outputPath, text);
        }
     })

 }; 

function addManager(){
    inquirer.prompt(managerQuestions)
    .then((response) => {
            const manager = new Manager(response.manager.name, response.manager.id, response.manager.email, response.manager.officeNumber);
            teamInput.push(manager);  
            menu(); 
            })
};

// Function to initialise the program
function init() {
    addManager();
}
      

// Call to run the program
init();