import { Product } from "@/types/shop"
import ProductCard from "./ProductCard"

interface ProductGridProps {
  products: Product[]
  onAddToCart: (id: number) => void
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        <div className="text-6xl mb-4">🧐</div>
        <p className="text-lg font-semibold">Ничего не найдено</p>
        <p className="text-sm mt-1">Попробуйте изменить запрос или категорию</p>
      </div>
    )
  }

  return (
    <div
      id="catalog"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}
