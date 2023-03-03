// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
}

// Intern.prototype.getSchool = function(){
//     return this.school;
// }

Intern.prototype.getRole = function(){
    return 'Intern';
}



const internQuestions = [
    {
        type: 'input',
        message: 'Please enter Intern\'s name',
        name: 'intern.name'
        },
        {
        type: 'input',
        message: 'Please enter Intern\'s ID',
        name: 'intern.id'
        },
        {
            type: 'input',
            message: 'Please enter Intern\'s Email',
            name: 'intern.email'
        },
        {
            type: 'input',
            message: 'Please enter Intern\'s School',
            name: 'intern.school'
        },
        // {
        //     type: 'list',
        //     message: 'Please select from the following:',
        //     choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        //     name: 'intern.addOrFinish'
        //     },
        
]

module.exports = { 
    Intern, 
    internQuestions 
};