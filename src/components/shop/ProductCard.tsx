import { ShoppingCart, Heart, Star } from "lucide-react"
import { Product } from "@/types/shop"
import { useState } from "react"

interface ProductCardProps {
  product: Product
  onAddToCart: (id: number) => void
}

const conditionColor: Record<string, string> = {
  "Идеальное": "bg-green-100 text-green-700",
  "Отличное": "bg-blue-100 text-blue-700",
  "Хорошее": "bg-yellow-100 text-yellow-700",
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [liked, setLiked] = useState(false)
  const [added, setAdded] = useState(false)
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null

  const handleAdd = () => {
    onAddToCart(product.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group flex flex-col">
      {/* Фото */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Бейджи */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {discount && (
            <span className="bg-rose-500 text-white text-xs font-black px-2 py-0.5 rounded-full">
              -{discount}%
            </span>
          )}
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Новинка
            </span>
          )}
          {product.isSale && !product.isNew && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Акция
            </span>
          )}
        </div>

        {/* Состояние */}
        <div className="absolute top-2 right-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${conditionColor[product.condition] ?? "bg-gray-100 text-gray-600"}`}>
            {product.condition}
          </span>
        </div>

        {/* Лайк */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute bottom-2 right-2 bg-white rounded-full p-1.5 shadow-md hover:scale-110 transition"
        >
          <Heart className={`w-4 h-4 ${liked ? "fill-rose-500 text-rose-500" : "text-gray-400"}`} />
        </button>
      </div>

      {/* Контент */}
      <div className="p-3 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-xs text-gray-400 font-medium">{product.brand}</span>
          <span className="text-gray-200">•</span>
          <span className="text-xs text-gray-400">Размер {product.size}</span>
        </div>

        <h3 className="text-sm font-semibold text-gray-800 mb-1 leading-snug line-clamp-2">
          {product.name}
        </h3>

        <p className="text-xs text-gray-400 mb-2 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Рейтинг */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200 fill-gray-200"}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        {/* Цена */}
        <div className="flex items-end gap-2 mb-3">
          <span className="text-xl font-black text-rose-500">{product.price} ₽</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through mb-0.5">{product.oldPrice} ₽</span>
          )}
        </div>

        {/* Кнопка */}
        <button
          onClick={handleAdd}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            added
              ? "bg-green-500 text-white"
              : "bg-rose-500 hover:bg-rose-600 text-white"
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          {added ? "Добавлено! ✓" : "В корзину"}
        </button>
      </div>
    </div>
  )
}
