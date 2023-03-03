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


// TODO: Write Code to gather information about the development team members, and render the HTML file.




function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully written to team.html!'));
};

const teamInput = [];

function init() {
    inquirer.prompt(managerQuestions)
    .then((response) => {
            const manager = new Manager(response.manager.name, response.manager.id, response.manager.email, response.manager.officeNumber);
            teamInput.push(manager);
            if(response.manager.addOrFinish === 'Finish building the team'){
                let text = render(teamInput);
                writeToFile(outputPath, text);
                return;
            } else if(response.manager.addOrFinish === 'Add an engineer'){
                inquirer.prompt(engineerQuestions)
                .then((responseEng) => {
                    const engineer = new Engineer(responseEng.engineer.name, responseEng.engineer.id, responseEng.engineer.email, responseEng.engineer.github);
                    teamInput.push(engineer);
                    let text = render(teamInput);
                writeToFile(outputPath, text);
                return;
                })
            } else if(response.manager.addOrFinish === 'Add an intern'){
                inquirer.prompt(internQuestions)
                .then((responseInt) => {
                    const intern = new Intern(responseInt.intern.name, responseInt.intern.id, responseInt.intern.email, responseInt.intern.school);
                    teamInput.push(intern);
                    if (responseInt.intern.addOrFinish === 'Finish building the team'){
                        
                    }
                    let text = render(teamInput);
                writeToFile(outputPath, text);
                return;
                })
            };
    });
};


init();