export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 text-white overflow-hidden">
      {/* Декоративные круги */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              🔥 Горячие цены
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              БУ трусики<br />
              <span className="text-yellow-300">по смешным ценам!</span>
            </h1>
            <p className="text-rose-100 text-lg mb-6 max-w-md">
              Более <strong>500+ лотов</strong> от брендов Victoria's Secret, Calvin Klein, La Perla и других. Все вещи проверены и постираны.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#catalog" className="bg-white text-rose-600 font-bold px-6 py-3 rounded-full hover:bg-rose-50 transition shadow-lg">
                Смотреть каталог
              </a>
              <a href="#" className="bg-white/20 backdrop-blur text-white font-semibold px-6 py-3 rounded-full hover:bg-white/30 transition border border-white/30">
                Как мы работаем
              </a>
            </div>
          </div>

          {/* Статистика */}
          <div className="flex gap-6 md:flex-col md:gap-4">
            <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center min-w-[100px]">
              <div className="text-3xl font-black">500+</div>
              <div className="text-xs text-rose-100">товаров</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center min-w-[100px]">
              <div className="text-3xl font-black">-95%</div>
              <div className="text-xs text-rose-100">скидки</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center min-w-[100px]">
              <div className="text-3xl font-black">2к+</div>
              <div className="text-xs text-rose-100">клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
