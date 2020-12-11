/** @type {string[]} */
const args = process.argv

if (args.length !== 3) {
  console.log('Please pass the file you wish to work on.')
}

const fileName = args[2]

if (fileName.includes('/')) {
  console.error('Not Implimented: slashes not supported in filenames.')
  process.exit(-1)
}
