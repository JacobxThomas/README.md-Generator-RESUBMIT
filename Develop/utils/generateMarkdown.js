function generateMarkdown(userInput) {
    switch (userInput.license){
      case 'Apache License 2.0':
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
      case 'BSD 3-Clause':
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      break;
      case 'BSD 2-Clause':
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
      break;
      case 'GNU General Public License (GLP)':
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
      case 'MIT License':
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
      case 'Mozilla Public License 2.0':
        licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break;
      case 'Eclipse Public License 1.0':
        licenseBadge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
      break;
      case 'Unlicensed':
        licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
      break;
    };
  
    return `
    # ${userInput.title} 
    ${licenseBadge}
  
    ## Description
    ${userInput.description}
    
    ## Table Of Contents
    * [Installation Instructions](#Installation)
    * [Usage Instructions](#Usage)
    * [License](#License)
    * [Contributors](#Contributors)
    * [Testing](#Testing)
    * [Author](#Author)
    
    ## Installation
    ${userInput.installation}
  
    ## Usage
    ${userInput.usage}
    
    ## License 
    ${userInput.license}
  
    ## Contributions
    ${userInput.contributors}
  
    ## Tests
    ${userInput.test}
  
    ## Questions
    ${userInput.username}
  
    ${userInput.link}
    
    ${userInput.email}
  
    ${userInput.contact}
    `};
    
  module.exports = generateMarkdown;