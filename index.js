var ipc = require('node-ipc')

ipc.connectTo('test', function() {
  ipc.of.test.on('connect', function() {
    ipc.log('connected to test')

    setInterval(function() {
      ipc.of.test.emit('message', 'hello')
    }, 1000)
  })
})

