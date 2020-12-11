const path = require('path')

function checkFilename (fileName) {
  if (fileName.includes('/')) {
    throw new Error('Not Implimented: slashes not supported in filenames.')
  }

  if (path.extname(fileName) !== '.lib') {
    throw new Error('Not Implimented: only .lib is currently supported.')
  }
}

module.exports = {
  checkFilename
}
