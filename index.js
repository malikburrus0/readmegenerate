// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const {genMd, questions} = require('./utils');

prompt(questions).then(genMd);


