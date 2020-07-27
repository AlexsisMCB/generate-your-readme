const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the title of your project? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Enter project title! Please!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your project. (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Enter description! Please!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps for installing your project for another user?",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter installation steps!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Give examples of usage",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please give examples of usage!");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "What license was used for this project?",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public 2.0", "Apache 2.0", "MIT", "Boost Software 1.0", "Unlicense"]
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide rules or guidelines for the process for contributing to your project",
    },
    {
        type: "input",
        name: "tests",
        message: "Write a test of how to run your application!"
    },
    {
        type: "input",
        name: "username",
        message: "What's your github username?",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please give username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What's your email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please give email address!");
                return false;
            }
        }
    }
];

// function to write README file

function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/readme.md", data, err => {
            if (err) {
                reject(err);
                return;
            } 
            resolve ("Success");
        })
    })
}

// function to initialize program
const init = () => {
    return inquirer.prompt(questions);
}

// function call to initialize program
init()
    .then(readmeData => {
        return generateReadme(readmeData);
    })
    .then(readmeFile => {
        console.log(readmeFile);
        return writeToFile(readmeFile);
    });

//console.log(inquirer);