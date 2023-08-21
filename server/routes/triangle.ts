import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    const c = Number(req.query.c)

    const responseData = `Hello! a: ${a} b: ${b} c: ${c}`
    res.json({ message: responseData })
  } catch (error) {
    res.status(500)
  }
})

export default router