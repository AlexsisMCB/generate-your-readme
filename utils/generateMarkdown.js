// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  &copy; ${data.license}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
    
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  To view open source licenses, visit [https://choosealicense.com/licenses/](https://choosealicense.com/licenses/)
  ${data.license}

  ## Contributing
        
  ## Tests
  ${data.tests}

  ## Questions
  For any following questions feel free to contact me at:
  My GitHub page is [https://github.com/${data.username}](https://github.com/${data.username})
  [${data.email}](${data.email})
  `;
};

module.exports = generateMarkdown;
