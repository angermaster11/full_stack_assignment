import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1]
  
    console.log('👉 Token from frontend:', token)
  
    if (!token) {
      res.status(401).json({ message: 'Unauthorized: Token not found' })
      return
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as any
      ;(req as any).userEmail = decoded.email
      next()
    } catch (err) {
      console.log('❌ Invalid token:', err)
      res.status(403).json({ message: 'Invalid or expired token' })
    }
  }
  

export default authMiddleware
