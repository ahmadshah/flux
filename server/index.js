import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes'

mongoose.connect('mongodb://localhost/flux', { useNewUrlParser: true }, () => {
    console.log('Database connection succeed...')
})

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/api', routes)

app.listen(3001, () => console.log('App is running on port 3000'))