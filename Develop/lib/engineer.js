const Employee = require('./employee.js');

class Engineer extends Employee {

    constructor(name, id, email, gitHub) {

        super(name, id, email);
        this.role = 'Engineer';
        this.gitHub = gitHub;
    
    };

    getGithub() {
        return this.gitHub;
    };

}

module.exports = Engineer;

