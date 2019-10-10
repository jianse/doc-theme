const liveServer = require('live-server')

const params = {
    port: 3000,
    watch: ['lib', 'preview', 'index.html']
}

liveServer.start(params)