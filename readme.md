# lighting-stream

Render a [lighting vizualizations](http://lightning-viz.org/) using a stream

```
npm install lightning-stream
```

This is a module for rendering a stream of data as a lightning visualization. Useful if you have a stream of data you want to quickly vizualize.

## Usage
```js
var lightningStream = require('lightning-stream')
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
```

You can run this example by `npm run example`

## API

#### `var stream = lightningStream(viz, [mapping])`
Creates a new writable stream that will forward data written to it to a lighting vizualization. Optionally you can pass a mapping function that will transform the data before it gets passed to the vizualization

## Liscence
MIT