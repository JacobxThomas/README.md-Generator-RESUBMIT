const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a project description",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required for installation?",
    },
    {
        type: "input",
        name: "usage",
        message: "What are the steps required for use?",
    },
    {
        type: "list",
        name: "license",
        message: "Select license",
        choices: [
            "Apache License 2.0",
            "BSD 3-Clause",
            "BSD 2-Clause",
            "GNU General Public License (GLP)",
            "MIT License",
            "Mozilla Public License 2.0",
            "Eclipse Public License 1.0",
            "Unlicensed"
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Enter the GitHub usernames of contributors",
    },
    {
        type: "input",
        name: "test",
        message: "What are the steps required to run a test?",
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "link",
        message: "Enter a link to your GitHub",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email adress",
    },
    {
        type: "input",
        name: "contact",
        message: "Enter information on how to contact you",
    }
];

