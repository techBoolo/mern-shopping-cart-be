import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

let db
const mongodbUrl = process.env.MONGODB_URI
const dbName = process.env.DB_NAME

const mongoClient = new MongoClient(mongodbUrl)

export const connectDB = async () => {
  if(db) return db
  try {
    await mongoClient.connect()
    db = mongoClient.db(dbName)
    console.log('connected to db')
    process.on('exit', () => {
      mongoClient.close()
    })
  } catch (error) {
    console.log('db connection failed');
    process.exit(1)
  }
}

export const getDB = () => {
  return db
}
