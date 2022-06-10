import { getProducts, getProductById } from '../models/product.js'

export const index = async (req, res) => {
  try {
    const products = await getProducts()
    res.status(200).json(products)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' })
  }
}

export const show = async (req, res) => {
  try {
    const { id } = req.params
    const product = await getProductById(id) 
    res.status(200).json(product)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error'})
  }

}
