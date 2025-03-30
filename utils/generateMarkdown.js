


// DO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }
    
    const badges = {
        'MIT': '![MIT License](https://img.shields.io/badge/license-MIT-green)',
        'Apache 2.0': '![Apache 2.0 License](https://img.shields.io/badge/license-Apache%202.0-blue)',
        'GPL 3.0': '![GPL 3.0 License](https://img.shields.io/badge/license-GPL%203.0-orange)',
        'BSD 3': '![BSD 3 License](https://img.shields.io/badge/license-BSD%203-red)',
        
    };

    return badges[license] || '';
}




// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
    if (!license) {
        return '';
    }

    const links = {
        'MIT': '[MIT License](https://opensource.org/licenses/MIT)',
        'Apache 2.0': '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)',
        'GPL 3.0': '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)',
        'BSD 3': '[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)',
        
    };

    return links[license] || '';
}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
    if (!license) {
        return '';
    }

    return `## License\n\nThis project is licensed under the ${license}.\n${renderLicenseLink(license)}`;

}

// TODO: Create a function to generate markdown for README


function generateMarkdown(answers ) {
    const licenseBadge = renderLicenseBadge(answers.license);
    const licenseSection = renderLicenseSection(answers.license);

  return ` #${answers.title}

    ${licenseBadge}

    ## Description
    ${answers.description}
    
    

    
    ## Installation
    ${answers.installation}
    
   
    
    ## Usage
    ${answers.usage}
    
    
    ## Contributors
    ${answers.contributing}
    
    
    
    
    ## License
    ${licenseSection}
    
   
   
    
    ## Tests
    ${answers.tests}
    
## Questions
    
    
    If you have any questions, please contact me at:
    -Email: ${answers.email};
    -Github http://github.com/${answers.github}  

`; 
};


export default generateMarkdown;