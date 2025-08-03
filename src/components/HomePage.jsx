import "./HomePage.css"
function HomePage({onStart}) {

  const category = [
            { name: 'Yeni! Kore', icon: '1', href: '/kategori/kore' },
            { name: 'Pizza', icon: '2', href: '/kategori/pizza' },
            { name: 'Burger', icon: '3', href: '/kategori/burger' },
            { name: 'Kızartmalar', icon: '4', href: '/kategori/kizartmalar' },
            { name: 'Fast food', icon: '5', href: '/kategori/fast-food' },
            { name: 'Gazlı İçecek', icon: '6', href: '/kategori/gazli-icecek' },
          ]
  
  return (
    <>
      <div>
        <header className="top">
            <h2 className="top-title">Teknolojik Yemekler</h2>
          <p className="subtitle">fırsatı kaçırma</p>
          <h2 className="main-title">
            KOD ACIKTIRIR
            <br />
            PIZZA, DOYURUR
          </h2>
          <button className="top-button" onClick={onStart}>
            ACIKTIM
          </button>
        </header>

        <nav className="nav-categories">
        <ul className="category-list">
          {category.map((item, index) => (
            <li className="category-item" key={index}>
              <a href={item.href}>
                <img
                  src={`/assets/iteration-2-images/icons/${item.icon}.svg`}
                  alt={item.name}
                />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="for-background">
          <section className="orta-menu">
          <div className="container">
            <div className="sol-kutu">
              <h2 className="ozel-lezzetus">
                Özel
                <br />
                Lezzetus
              </h2>
              <p>Position:Absolute Acı Burger</p>
              <button className="orta-menu-button" onClick={onStart}>
                SİPARİŞ VER
              </button>
            </div>

            <div className="sag-kutular">
              <div className="kutu-1">
                <h3>
                  Hackathlon
                  <br />
                  Burger Menü
                </h3>
                <button className="orta-menu-button" onClick={onStart}>
                  SİPARİŞ VER
                </button>
              </div>
              <div className="kutu-2">
                <h3>
                  <span className="highlight">Çoooook</span> hızlı
                  <br />
                  npm gibi kurye
                </h3>
                <button className="orta-menu-button" onClick={onStart}>
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      
      </div>
      
    </>
  )
}

export default HomePage
