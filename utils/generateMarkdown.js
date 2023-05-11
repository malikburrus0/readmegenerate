const { writeFile, write } = require('fs');

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let output =  `  
  # ${data.projectTitle}
  ${
    data.badges == 'None' 
      ? '' 
      : `![badmath](https://img.shields.io/badge/License-${data.license}-red)`
    }

  ## Description
  
  ${data.description}

  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}

  ## License
  
  ${data.license}

  ## Badges
  ${data.badges == 'None' ? 'None' : `![badmath](https://img.shields.io/badge/License-${data.license}-red)`}
  
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  
 
  ## Contributers
  
  ${data.contributing}
  
  ## Tests
 
  ${data.tests}
`;

writeFile('./dist/README.md', output, err => {
  if (err) throw err;
});
}

module.exports = generateMarkdown;
