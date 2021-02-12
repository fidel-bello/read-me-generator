// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.UserName}/${data.Title})
    # Description
  `;
  }
  
  module.exports = generateMarkdown;