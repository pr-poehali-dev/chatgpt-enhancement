import { X, Trash2, ShoppingBag } from "lucide-react"
import { CartItem } from "@/types/shop"

interface CartDrawerProps {
  open: boolean
  onClose: () => void
  items: CartItem[]
  onRemove: (id: number) => void
}

export default function CartDrawer({ open, onClose, items, onRemove }: CartDrawerProps) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <>
      {/* Оверлей */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Дравер */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Шапка */}
        <div className="flex items-center justify-between p-4 border-b bg-rose-500 text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-bold text-lg">Корзина</span>
            {items.length > 0 && (
              <span className="bg-white text-rose-500 text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </div>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Товары */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p className="font-semibold">Корзина пуста</p>
              <p className="text-sm mt-1">Добавьте что-нибудь из каталога</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Размер {item.size}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-rose-500 font-bold text-sm">
                      {item.price * item.qty} ₽
                      {item.qty > 1 && (
                        <span className="text-gray-400 font-normal text-xs ml-1">({item.qty} шт.)</span>
                      )}
                    </span>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-gray-400 hover:text-rose-500 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Итого */}
        {items.length > 0 && (
          <div className="p-4 border-t space-y-3">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Доставка</span>
              <span className="text-green-600 font-semibold">от 150 ₽</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700">Итого:</span>
              <span className="text-2xl font-black text-rose-500">{total} ₽</span>
            </div>
            <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 rounded-xl transition text-sm">
              Оформить заказ
            </button>
            <button
              onClick={onClose}
              className="w-full text-gray-500 text-sm hover:text-gray-700 transition"
            >
              Продолжить покупки
            </button>
          </div>
        )}
      </div>
    </>
  )
}