// Depends on the base class of Employee
const Employee = require('./Employee');

// Intern extends upon the base class
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
}

Intern.prototype.getRole = function(){
    return 'Intern';
}


// List of questions to use for the 
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