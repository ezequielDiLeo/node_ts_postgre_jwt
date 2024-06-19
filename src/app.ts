import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'

const app = express()

app.use(express.json())

//routes

app.use('/auth', authRoutes)
app.use('/users', userRoutes)
//hacer api rest de usuarios

//autenticación
//user

export default app