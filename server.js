const liveServer = require('live-server')

const params = {
  port: 3000,
  watch: ['dest', 'doc']
}

liveServer.start(params)
