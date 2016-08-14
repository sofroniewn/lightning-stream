var lightningStream = require('./')
var from = require('from2')
var line = require('lightning-line-streaming')

var el = document.body.appendChild(document.createElement('div'))
var data = {series: [0]}
var viz = new line(el, data, [], [])

function mapping (data) {
  return {series: [data.score]}
}

var stream = lightningStream(viz, mapping)

var score = 0
var source = from.obj(function (size, callback) {
  setTimeout(function () {
    if (Math.random() > 0.5) score++
    else score--
    callback(null, {score: score})
  }, 500)
})

source.pipe(stream)