const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const newTeam = []
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

//Manager function
function newManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your employee ID number?",
            name: "id",
        },
        {
            type: "email",
            message: "What is your email address?", 
            name: "email",
        },
        {
            type: "number",
            message: "What is your office number?",
            name: "office",
        },
    ]).then(function (answers) {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        newTeam.push(manager);
        newEmployee();
    })
}

//Add new employee type function
function newEmployee() {
    inquirer.prompt([
        {
            type: "list",
            message: "Select a new employee type to add.",
            name: "newEmployee",
            choices: [
                "Intern",
                "Engineer",
                "No new employees"
            ]
        }
    ]).then(function (answer) {
        if(answer.newEmployee === "Intern") {
            newIntern();
        } else if (answer.newEmployee === "Engineer") {
            newEngineer();
        } else {
            //render();
        }
    })
}

//Intern function
function newIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Intern's employee ID number?",
            name: "id",
        },
        {
            type: "email",
            message: "What is the Intern's email address?", 
            name: "email",
        },
        {
            type: "input",
            message: "What is the Intern's school?", 
            name: "school",
        },
    ]).then(function (answers) {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        newTeam.push(intern);
        newEmployee();
    })
}

//Engineer function
function newEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Engineer's employee ID number?",
            name: "id",
        },
        {
            type: "email",
            message: "What is the Engineer's email address?", 
            name: "email",
        },
        {
            type: "input",
            message: "What is the Engineer's GitHub username?", 
            name: "github",
        },
    ]).then(function (answers) {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        newTeam.push(engineer);
        newEmployee();
    })
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
//function render() {
//}

newManager();

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
