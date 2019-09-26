const liveServer = require('live-server')

const params = {
  port: 3000,
  watch: ['lib', 'doc']
}

liveServer.start(params)
