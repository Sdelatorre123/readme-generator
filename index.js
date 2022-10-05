// TODO: Include packages needed for this application
// Packages
var inquirer = require("inquirer");
var fs = require("fs");


// TODO: Create an array of questions for user input
const questions = inquirer.prompt([{
    type: "input",
    name: "Title",
    message: "What is the title of the project?",
}, {
   type: "input",
   name: "Description",
   message: "What is the project about? Give a detailed description of your project.",
}, {
    type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
}, {
    type: "input",
        name: "usage",
        message: "What is this project usage for?",
}, 
{
    type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
]
},
{
type: "input",
name: "contributing",
message: "Who are the contributors of this projects?",
},
{
type: "input",
name: "tests",
message: "Is there a test included?",
},
{
type: "input",
name: "questions",
message: "What do I do if I have an issue?",
},
{
type: "input",
name: "username",
message: "Please enter your GitHub username:",
},
{
type: "input",
name: "email",
message: "Please enter your email:",
}
]) 

.then(({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    linked,
    email,
    usage,
    contribution
})=>{

    const template = `# ${title}

    * [Installation](#installation)
    * [Usage](#usage)
    * [contribution](#contribution)
    * [Credits](#credits)
    * [License](#license)
    # Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contribution 
    ${contribution}
    ## Credits 
    ${credit}
    ## License
    ${license}

    # Contact
    * Github :${git}
    * Linkedin :${linkedin}
    * E-mail :${email}`;
}
)


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 fs.writeFile(fileName, data, err => err ? console.log(err) : console.log("File Created"));
     }
   

// TODO: Create a function to initialize app
function init() {
    try {
    const InputUser =  inquirer.prompt(questions);
    console.log(InputUser);
     writeToFile('Readme.md', InputUser);
            }
            catch (error) {
                 console.log(error);
            }
         }

// Function call to initialize app
init()