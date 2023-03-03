// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

Manager.prototype.getRole = function(){
    return 'Manager';
}


const managerQuestions = [
    {
        type: 'input',
        message: 'Please enter team manager\'s name',
        name: 'manager.name'
    },
    {
        type: 'input',
        message: 'Please enter team manager\'s ID',
        name: 'manager.id'
    },
    {
        type: 'input',
        message: 'Please enter team manager\'s email address',
        name: 'manager.email'
    },
    {
        type: 'input',
        message: 'Please enter team manager\'s office number',
        name: 'manager.officeNumber'
    },
    
];

module.exports = { 
    Manager, 
    managerQuestions 
};