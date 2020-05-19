//  email, id, and specific information based on their role with the company

let inquirer = require('inquirer');
let fs = require('fs');
const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

console.log('Welcome to COMPANY, please answer the following questions so everybody can know a littlem more about you.');


// Employee questions
var employeeQuestions = [
  // Name
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },

  // Role
  {
    type: 'list',
    name: 'role',
    message: 'What is your role here at COMPANY',
    choices: ['Manager', 'Engineer', 'Intern']
  },

  // ID
  {
    type: 'input',
    name: 'id',
    message: 'What is your company ID?',
    // validate: function(value) {
    //   var valid = !isNaN(parseFloat(value));
    //   return valid || 'Please enter a number';
    // },
    // filter: Number
  },

  // Email
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
]

var engineerQuestion = [
  {
    type: 'list',
    name: 'ENGINEER',
    message: 'DFASJASLK',
    choices: ['IT', 'WORKED', 'GOOD']
  }
]

// Manager Questions
var managerQuestion = [
  {
    type: 'input',
    name: 'office',
    message: 'What is your office number?',
  },
  {
    type: "confirm",
    name: "askAgin",
    message: "Would you like to add another person?",
    default: true
  }
]

// Engineer Question
var engineerQuestion = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your github address?',
  }
]

// Intern Question
var internQuestion = [
  {
    type: 'input',
    name: 'school',
    message: 'What university are you going to?',
  }
]

ask()

function ask() {

  inquirer.prompt(employeeQuestions)
  .then(answers => {

    let profile = answers;

    if (answers.role === 'Manager') {
        inquirer.prompt(managerQuestion)
        .then(answers => {
          profile.uniqueQuestion = answers.office;
          console.log(profile)
          
          // Jonahs constructor code
          let newManager = new Manager(profile.name, profile.id, profile.email, profile.uniqueQuestion);
          console.log(newManager);
          
        // Creating HTML elements for new manager
          let newEmployee = `

          <!DOCTYPE html>
            <html lang="en">
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>

            <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                <div class="card-header">${newManager.name}</div>
                <div class="card-body">
                    <h5 class="card-title">${newManager.role}</h5>
                    <p class="card-text">${newManager.email}</p>
                    <p class="card-text">${newManager.officeNumber}</p>
                    <p class="card-text">${newManager.id}</p>
                </div>
            </div>

            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
          </body>
          </html>

          `;

          // Create HTML file from template
          fs.readFile('./templates/manager.html', (err, data) => {
              if(err) { console.log(err) };
          })
          fs.appendFile('./templates/manager.html', newEmployee, (err) => {
            if(err) { console.log(err) };
        })
         

        })
    }
    
    else if (answers.role === 'Engineer') {
        inquirer.prompt(engineerQuestion)
        .then(answers => {
          profile.uniqueQuestion = answers.github;
          console.log(profile)
          // Jonahs constructor code to add this to a profile

          // Jonahs constructor code
          let newEngineer = new Engineer(profile.name, profile.id, profile.email, profile.uniqueQuestion);
          console.log(newEngineer);

            // Creating HTML elements for new manager
          let newEmployee = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
          <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
              <div class="card-header">${newEngineer.name}</div>
              <div class="card-body">
                  <h5 class="card-title">${newEngineer.role}</h5>
                  <p class="card-text">${newEngineer.email}</p>
                  <p class="card-text">${newEngineer.gitHub}</p>
                  <p class="card-text">${newEngineer.id}</p>
              </div>
          </div>

          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </body>
        </html>
        `;

        // Create HTML file from template
        fs.readFile('./templates/engineer.html', (err, data) => {
            if(err) { console.log(err) };
        })
        fs.appendFile('./templates/engineer.html', newEmployee, (err) => {
          if(err) { console.log(err) };
      })

        })
    }  
    
    if (answers.role === 'Intern') {
        inquirer.prompt(internQuestion)
        .then(answers => {
          profile.uniqueQuestion = answers.school;
          console.log(profile)
          
          // Jonahs constructor code
          let newIntern = new Intern(profile.name, profile.id, profile.email, profile.uniqueQuestion);
          console.log(newIntern);

            // Creating HTML elements for new manager
          let newEmployee = `
          <!DOCTYPE html>
        <html lang="en">
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
          <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
              <div class="card-header">${newIntern.name}</div>
              <div class="card-body">
                  <h5 class="card-title">${newIntern.role}</h5>
                  <p class="card-text">${newIntern.email}</p>
                  <p class="card-text">${newIntern.school}</p>
                  <p class="card-text">${newIntern.id}</p>
              </div>
          </div>

          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </body>
        </html>
        `;

        // Create HTML file from template
        fs.readFile('./templates/intern.html', (err, data) => {
            if(err) { console.log(err) };
        })
        fs.appendFile('./templates/intern.html', newEmployee, (err) => {
          if(err) { console.log(err) };
      })

        })
    }

})

}



// Put info into constructor to create an object

// const Employee = require('./lib/Employee');

// let employee1 = new Employee('Name', 'ID', 'Title');

// console.log(employee1.id);