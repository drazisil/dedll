const tap = require('tap')
const { checkFilename } = require('../src')

tap.test('Main app', t => {
  try {
    checkFilename('./file.exe')
  } catch (error) {
    t.contains(error.message, 'slashes')
  }

  try {
    checkFilename('file.exe')
  } catch (error) {
    t.contains(error.message, 'lib')
  }

  try {
    checkFilename('file.lib')
  } catch (error) {
    t.notOk()
  }

  t.done()
})
