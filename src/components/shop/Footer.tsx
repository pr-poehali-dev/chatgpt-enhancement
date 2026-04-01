import { Heart, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Бренд */}
          <div>
            <div className="mb-3">
              <span className="text-3xl font-black text-rose-400">БУ</span>
              <span className="text-xs font-bold text-gray-500 block uppercase tracking-widest">Трусики</span>
            </div>
            <p className="text-sm leading-relaxed">
              Лучший магазин брендового бывшего в употреблении нижнего белья. Качество, проверенное нами лично.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-500 hover:text-pink-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-400 transition">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Каталог */}
          <div>
            <h4 className="text-white font-semibold mb-3">Каталог</h4>
            <ul className="space-y-2 text-sm">
              {["Женское бельё", "Мужское бельё", "Детское бельё", "Кружевное", "Спортивное", "Наборы"].map((i) => (
                <li key={i}><a href="#" className="hover:text-rose-400 transition">{i}</a></li>
              ))}
            </ul>
          </div>

          {/* Покупателям */}
          <div>
            <h4 className="text-white font-semibold mb-3">Покупателям</h4>
            <ul className="space-y-2 text-sm">
              {["Как сделать заказ", "Доставка и оплата", "Возврат и обмен", "FAQ", "О качестве", "Отзывы"].map((i) => (
                <li key={i}><a href="#" className="hover:text-rose-400 transition">{i}</a></li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-white font-semibold mb-3">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>📱 +7 (999) 123-45-67</li>
              <li>✉️ hello@butrusiki.ru</li>
              <li>📦 Отправляем по всей России</li>
              <li className="pt-2">
                <span className="text-xs text-gray-600">Пн–Пт: 9:00–21:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Баннер безопасности */}
        <div className="border border-gray-800 rounded-xl p-4 mb-6 bg-gray-800/50 text-center text-sm">
          🔒 Все товары проходят дезинфекцию и стирку при 90°С перед отправкой.{" "}
          <span className="text-rose-400 font-semibold">Ваша безопасность — наш приоритет.</span>
        </div>

        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>© 2024 БУ Трусики. Все права защищены.</p>
          <p className="flex items-center gap-1">
            Сделано с <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> в России
          </p>
        </div>
      </div>
    </footer>
  )
}
