var ipc = require('node-ipc')

ipc.config.id = 'test'

ipc.serve(function() {
  ipc.server.on('message', function(data, socket) {
    ipc.log('got a message: '.debug, data)
  })
})

ipc.server.start()
