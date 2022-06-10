import http from 'http'
import app from './app.js'
import { connectDB } from './config/db.js'

const PORT = process.env.PORT || 3001

const server = http.createServer(app)

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server running on port ${PORT}`)
    })
  })
