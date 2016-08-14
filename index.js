var through = require('through2')

module.exports = function (viz, mapping) {
  function defaultMapping(data) {
    return data
  }
  if (!mapping) mapping = defaultMapping
   
  return through.obj(function (data, enc, callback) {
    viz.appendData(mapping(data))
    callback(null)
  })
}