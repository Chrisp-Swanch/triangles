import express from 'express'

import triangle from './routes/triangle'

const server = express()

server.use(express.json())
server.use('/triangle', triangle)

server.use('/*', (req, res) => res.sendStatus(404))

export default server