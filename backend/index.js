import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'

import router from './routes/paste.js'

const app = express()

app.use(cors())

const PORT = process.env.PORT | 5000

mongoose.connect(process.env.DB)
.then( () => app.listen( PORT, () => console.log(`Server started at port: ${PORT}`) ) )
.catch( (e) => console.log(e) )

mongoose.connection.on('connected', () => console.log('connected to db!'))
mongoose.connection.on('error', (e) => console.log(e))

app.use('/', router)