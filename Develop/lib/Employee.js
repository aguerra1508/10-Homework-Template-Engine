// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // getName Method
    getName() {
        return this.name;
    }

    // getID Method
    getId() {
        return this.id;
    }

    //getEmail Method 
    getEmail() {
        return this.email;
    }

    //getRole Method
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;