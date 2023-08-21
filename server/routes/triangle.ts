import express from 'express'
import { compareSides } from '../util'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    const c = Number(req.query.c)

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      res.status(400).json({ error: 'Invalid parameters!' })
      return
    }

    const responseData = compareSides(a, b, c)

    res.json({ message: responseData })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error!' })
  }
})

export default router