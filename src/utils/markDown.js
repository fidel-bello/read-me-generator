// function to generate markdown for README
export function generateMarkdown(data) {
    return `
   <h1 align="center">${data.Title}</h1>

   ## Description
   * ${data.Description}

   ## Table of Contents
   * [Description](#Description)
   * [Installation](#Installation)
   * [Usage](#Usage)
   * [license](#License)
   * [Contributing](#Contributing)
   * [Test](#Test)
   * [Questions](#Questions)
   
 

   ## Installation
   * ${data.Installation} 

   ## Usage 
   * ${data.Usage}

   ## License
   * ![badge](https://img.shields.io/badge/license-${data.License}-blue)
   * This application is covered by ${data.License}

   ## Contributing
   * ${data.Contributing}

   ## Test
   * ${data.Test}

   ## Questions
   * ${data.Questions}
   * My github is: [${data.UserName}](https://github.com/${data.UserName})
   * Email me with questions: ${data.Email}
        `
    }