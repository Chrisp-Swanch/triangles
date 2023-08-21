import express from 'express'

import triangle from './routes/triangle'

const server = express()

server.use(express.json())
server.use('/api/v1/triangle', triangle)

server.use('/api/v1/*', (req, res) => res.sendStatus(404))

export default server