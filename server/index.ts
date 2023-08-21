import server from './server'

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log('API server is listening on port', port)
})