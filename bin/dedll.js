#! /usr/bin/env node

const debug = require('debug')('dedll')
const { checkFilename } = require('../src')

/** @type {string[]} */
const args = process.argv

if (args.length !== 3) {
  console.log('Please pass the file you wish to work on.')
}

const fileName = args[2]
debug(`fileName: ${fileName}`)

try {
  checkFilename(fileName)
} catch (error) {
  console.error(error.message)
  process.exit(-1)
}

module.exports = {
  checkFilename
}
