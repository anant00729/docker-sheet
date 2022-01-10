import express from 'express'
import connectToDatabase from './helpers.mjs'

const app = express()

app.get('/', (req, res)=> {
    res.send('<h1>Hello World!</h1>')
})

await connectToDatabase()

const PORT = 3000

app.listen(PORT , ()=> {
    console.log(`the app is running on port ${PORT}`)
})

