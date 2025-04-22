import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || 'secret'

export const generateToken = (email: string) => {
  return jwt.sign({ email }, SECRET, { expiresIn: '1h' })
}
