import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body

  try {
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      res.status(400).json({ message: 'User already exists' })
      return
    }

    const user = await prisma.user.create({ data: { email, password } })
    res.status(201).json(user)
  } catch (error: any) {
    console.error(error) // Optional: for better debugging
    res.status(500).json({ message: 'Something went wrong', error: error.message || error })
  }
}
