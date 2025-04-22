import { Request, Response } from 'express'
import prisma from '../prisma/client'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils/jwt'

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) return res.status(400).json({ message: 'User already exists' })

    const hashed = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({ data: { email, password: hashed } })
    const token = generateToken(user.email)
    console.log(user.email, token) // Optional: for better debugging

    res.status(201).json({ email: user.email, token })
  } catch (err) {
    res.status(500).json({ message: 'Register failed' })
    console.error(err) 
  }
}

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) return res.status(400).json({ message: 'Invalid credentials' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' })

    const token = generateToken(user.email)
    res.status(200).json({ email: user.email, token })
    console.log(token,user.email) 
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Login failed' })
  }
}
