//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === '') {
    return ''
  } 
}

renderLicenseBadge();

//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === '') {
    return ''
  } 
}

renderLicenseLink();

//Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') {
    return ''
  } 
}

renderLicenseSection();

//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub](https://img.shields.io/github/license/${data.github}/${data.repo}?style=for-the-badge)

  ## Description 
  ${data.description}

  ## Table of Contents 
  - Included: ${data.contents}

  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributions](#contributions)
  -[Tests](#tests)
  -[Questions](#questions)

  ## Installation 
  ${data.installation}

  ## usage
  ${data.usage}
  
  ## License 
  ${data.license}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}
  
  ## Questions
  - Github profile: https://github.com/${data.github}
  
  - Email: ${data.email}`;
}

module.exports = generateMarkdown;
