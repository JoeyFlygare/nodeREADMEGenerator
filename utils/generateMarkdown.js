// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## licenses
  ${data.licenses}
  ### Tests
  ${data.tests}
  `;
 
}

module.exports = generateMarkdown;
