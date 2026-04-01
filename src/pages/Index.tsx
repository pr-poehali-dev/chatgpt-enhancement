import { useState } from "react"
import Header from "@/components/shop/Header"
import Footer from "@/components/shop/Footer"
import HeroBanner from "@/components/shop/HeroBanner"
import ProductGrid from "@/components/shop/ProductGrid"
import CartDrawer from "@/components/shop/CartDrawer"
import { products } from "@/data/products"
import { CartItem } from "@/types/shop"

export default function Index() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const addToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId)
    if (!product) return
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === productId)
      if (existing) {
        return prev.map((i) => i.id === productId ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id))
  }

  const totalCount = cartItems.reduce((s, i) => s + i.qty, 0)

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = selectedCategory === "all" || p.category === selectedCategory
    return matchSearch && matchCat
  })

  return (
    <div className="min-h-screen bg-[#fdf6f0] flex flex-col">
      <Header
        cartCount={totalCount}
        onCartOpen={() => setCartOpen(true)}
        search={search}
        onSearch={setSearch}
      />

      <HeroBanner />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {/* Фильтры категорий */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["all", "женские", "мужские", "детские", "кружевные", "спортивные"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                selectedCategory === cat
                  ? "bg-rose-500 text-white border-rose-500 shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-rose-300 hover:text-rose-500"
              }`}
            >
              {cat === "all" ? "Все товары" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-500 text-sm">
            Найдено: <span className="font-semibold text-gray-700">{filtered.length}</span> товаров
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>🔥 Горячие предложения каждый день!</span>
          </div>
        </div>

        <ProductGrid products={filtered} onAddToCart={addToCart} />
      </main>

      {/* Доверие */}
      <section className="bg-white border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">✅</div>
              <div className="font-semibold text-gray-700">Проверенный товар</div>
              <div className="text-sm text-gray-400">Каждый лот проходит фото-контроль</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-semibold text-gray-700">Быстрая доставка</div>
              <div className="text-sm text-gray-400">СДЭК, Почта России, самовывоз</div>
            </div>
            <div>
              <div className="text-3xl mb-2">💬</div>
              <div className="font-semibold text-gray-700">Отзывы покупателей</div>
              <div className="text-sm text-gray-400">Более 2 000 довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl mb-2">💰</div>
              <div className="font-semibold text-gray-700">Выгодные цены</div>
              <div className="text-sm text-gray-400">Дешевле чем в магазинах до 90%</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
      />
    </div>
  )
}
