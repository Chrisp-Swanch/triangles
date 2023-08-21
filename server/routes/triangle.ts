import express from 'express'
import { compareSides } from '../util'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    // handle funky inputs
    console.log(`param types: a: ${typeof req.query.a} b: ${typeof req.query.b} c: ${typeof req.query.c}`)

    const a = Number(req.query.a)
    const b = Number(req.query.b)
    const c = Number(req.query.c)

    console.log(`const types: a: ${typeof a}, ${a} b: ${typeof b}, ${b} c: ${typeof c}, ${c}`)

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      console.log('Invalid parameters!')
      res.status(400).json({ error: 'Invalid parameters!' })
      return
    }

    const responseData = compareSides(a, b, c)

    res.json({ message: responseData })
  } catch (error) {
    res.status(500)
  }
})

export default router