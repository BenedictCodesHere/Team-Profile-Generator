// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
}

// Engineer.prototype.getGithub = function(){
//     return this.github;
// }

Engineer.prototype.getRole = function(){
    return 'Engineer';
}




const engineerQuestions = [
    {
    type: 'input',
    message: 'Please enter Engineer\'s name',
    name: 'engineer.name'
    },
    {
    type: 'input',
    message: 'Please enter Engineer\'s ID',
    name: 'engineer.id'
    },
    {
        type: 'input',
        message: 'Please enter Engineer\'s Email',
        name: 'engineer.email'
    },
    {
        type: 'input',
        message: 'Please enter Engineer\'s Github Username',
        name: 'engineer.github'
    },
  
    
];

module.exports = {
    Engineer, 
    engineerQuestions
};