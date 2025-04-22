import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware'

const router = express.Router()

router.get('/dashboard', authMiddleware, (req, res) => {
  const userEmail = (req as any).userEmail
  res.json({ message: `Welcome to your dashboard, ${userEmail}` })
})

export default router
