import express from 'express'
import { compareSides } from '../util'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    const c = Number(req.query.c)
    const responseData = compareSides(a, b, c)

    res.json({ message: responseData })
  } catch (error) {
    res.status(500)
  }
})

export default router