import express from 'express'
import cors from 'cors'
import productRoute  from './routes/product.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/products', productRoute)

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'it works'})
})

export default app
