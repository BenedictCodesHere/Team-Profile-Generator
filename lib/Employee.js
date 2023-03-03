// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        
    }
    getName(){return this.name};
    getId() {return this.id};
    getEmail() {return this.email};
    getRole() {return 'Employee'};
}

// const jeff = new Employee('Jeff', '#5043ah', 'crumplestilts@fakemail.com');
// jeff.getName();
// jeff.getId();
// console.log(jeff.getId());

module.exports = Employee;
