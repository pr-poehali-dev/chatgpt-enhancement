export interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number
  image: string
  category: string
  size: string
  brand: string
  condition: string
  rating: number
  reviews: number
  isNew?: boolean
  isSale?: boolean
  description: string
  color: string
}

export interface CartItem extends Product {
  qty: number
}
