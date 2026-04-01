export default function HeroBanner() {
  const heroImages = [
    "https://cdn.poehali.dev/projects/55d8ca05-0173-4913-af12-6049cf3ca9cd/files/f69ed746-12f7-4f2d-90fa-4dc906f7c11a.jpg",
    "https://cdn.poehali.dev/projects/55d8ca05-0173-4913-af12-6049cf3ca9cd/files/488cf0d1-20e3-4f80-af79-71eb5542ed43.jpg",
    "https://cdn.poehali.dev/projects/55d8ca05-0173-4913-af12-6049cf3ca9cd/files/33de88db-1716-4868-a421-34c3f5eb91ca.jpg",
    "https://cdn.poehali.dev/projects/55d8ca05-0173-4913-af12-6049cf3ca9cd/files/698227b6-ed78-49da-9635-5895f2774af2.jpg",
    "https://cdn.poehali.dev/projects/55d8ca05-0173-4913-af12-6049cf3ca9cd/files/e83ff95b-b2dd-4122-95d9-68e5a6168ebc.jpg",
    "https://cdn.poehali.dev/projects/55d8ca05-0173-4913-af12-6049cf3ca9cd/files/d50f80e4-def0-44fe-824a-891b0262c723.jpg",
  ]

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
              Более <strong>500+ лотов</strong> женского, мужского и детского белья.
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

          {/* Коллаж фотографий */}
          <div className="flex-shrink-0 hidden md:block">
            <div className="grid grid-cols-3 gap-2 w-[280px]">
              {heroImages.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-xl overflow-hidden border-2 border-white/30 shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={img}
                    alt="Товар"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
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