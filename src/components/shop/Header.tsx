import { ShoppingCart, Search, Heart, User, Menu, X } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  cartCount: number
  onCartOpen: () => void
  search: string
  onSearch: (v: string) => void
}

export default function Header({ cartCount, onCartOpen, search, onSearch }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-rose-100 sticky top-0 z-50 shadow-sm">
      {/* Верхняя полоса */}
      <div className="bg-rose-500 text-white text-center text-xs py-1.5 font-medium tracking-wide">
        🎉 РАСПРОДАЖА: скидки до 95% на всё бельё! Доставка от 150₽
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <a href="/" className="flex flex-col leading-tight">
              <span className="text-2xl font-black text-rose-500 tracking-tight">БУ</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest -mt-1">ТРУСИКИ</span>
            </a>
          </div>

          {/* Поиск */}
          <div className="flex-1 max-w-xl relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск трусиков по бренду, размеру..."
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition"
            />
          </div>

          {/* Действия */}
          <div className="flex items-center gap-2 ml-auto">
            <button className="hidden sm:flex items-center gap-1 text-gray-500 hover:text-rose-500 transition p-2">
              <User className="w-5 h-5" />
            </button>
            <button className="hidden sm:flex items-center gap-1 text-gray-500 hover:text-rose-500 transition p-2 relative">
              <Heart className="w-5 h-5" />
            </button>
            <button
              onClick={onCartOpen}
              className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition relative"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Корзина</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="sm:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Мобильный поиск */}
        <div className="sm:hidden mt-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск..."
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
          </div>
        </div>
      </div>

      {/* Навигация */}
      <nav className="border-t border-gray-100 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex gap-6 py-2 text-sm font-medium text-gray-600 overflow-x-auto">
            {["Все товары", "Женские", "Мужские", "Детские", "Кружевные", "Спортивные", "Новинки", "Распродажа"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-rose-500 transition whitespace-nowrap py-1 border-b-2 border-transparent hover:border-rose-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
