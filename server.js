const liveServer = require('live-server')

const params = {
  port: 3000,
  watch: ['lib', 'docs','index.html']
}

liveServer.start(params)
