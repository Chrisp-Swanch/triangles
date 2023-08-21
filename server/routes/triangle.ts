import express from 'express'
import { compareSides } from '../util'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    const c = Number(req.query.c)

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      res.status(400).send('Invalid parameters!')
      return
    }

    const responseData = compareSides(a, b, c)

    res.send(responseData)
  } catch (error) {
    res.status(500).send('Internal server error!')
  }
})

export default router