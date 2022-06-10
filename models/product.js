import { ObjectId } from 'mongodb'
import { getDB } from '../config/db.js'

export const getProducts = async () => {
  try {
    const Product = getDB().collection('products')
    const cursor = await Product.find()
    return await cursor.toArray()
  } catch (error) {
    throw error
  }
}

export const getProductById = async (id) => {
  try {
    const Product = getDB().collection('products')
    return await Product.findOne({ _id: ObjectId(id)}) 
  } catch (error) {
    throw error
  }
}
