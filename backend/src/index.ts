import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

// ✅ This is correct — don't pass registerUser directly
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
