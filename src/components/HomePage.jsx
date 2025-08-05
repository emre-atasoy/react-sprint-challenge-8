import Footer from "./Footer";
import "./HomePage.css"

function HomePage({ onStart }) {
  const category = [
    { name: "Yeni! Kore", icon: "1", href: "/kategori/kore" },
    { name: "Pizza", icon: "2", href: "/kategori/pizza" },
    { name: "Burger", icon: "3", href: "/kategori/burger" },
    { name: "Kızartmalar", icon: "4", href: "/kategori/kizartmalar" },
    { name: "Fast food", icon: "5", href: "/kategori/fast-food" },
    { name: "Gazlı İçecek", icon: "6", href: "/kategori/gazli-icecek" },
  ];

  const filterCategories = [
    { key: "ramen", label: "Ramen", icon: "1.svg" },
    { key: "pizza", label: "Pizza", icon: "2.svg" },
    { key: "burger", label: "Burger", icon: "3.svg" },
    { key: "fries", label: "French Fries", icon: "4.svg" },
    { key: "fastfood", label: "Fast Food", icon: "5.svg" },
    { key: "drink", label: "Soft Drinks", icon: "6.svg" },
  ];

  return (
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

        <section className="ara-yazi">
          <p className="subtitle2">en çok paketlenen menüler</p>
          <h2 className="alt-h2">
            <span className="responsive-line">Acıktıran</span>
            <span className="responsive-line">Kodlara Doyuran</span>
            <span className="responsive-line">Lezzetler</span>
          </h2>
        </section>

        <div className="filter-buttons">
          {filterCategories.map((item) => (
            <button
              key={item.key}
              className="filter-btn"
              data-category={item.key}
            >
              <img
                src={`/assets/iteration-2-images/icons/${item.icon}`}
                alt={item.label}
              />
              {item.label}
            </button>
          ))}
        </div>

        <div className="menu-container">
          <div className="menu-item">
            <img
              src="/assets/iteration-2-images/pictures/food-1.png"
              alt="Terminal Pizza"
            />
            <h3 className="menu-tittle">Terminal Pizza</h3>
            <div className="info">
              <span>4.9</span>
              <span>(200)</span>
              <span className="menu-tittle">60₺</span>
            </div>
          </div>

          <div className="menu-item">
            <img
              src="/assets/iteration-2-images/pictures/food-2.png"
              alt="Position Absolute Acı Pizza"
            />
            <h3 className="menu-tittle">Position Absolute Acı Pizza</h3>
            <div className="info">
              <span>4.9</span>
              <span>(200)</span>
              <span className="menu-tittle">60₺</span>
            </div>
          </div>

          <div className="menu-item">
            <img
              src="/assets/iteration-2-images/pictures/food-3.png"
              alt="useEffect Tavuklu Burger"
            />
            <h3 className="menu-tittle">useEffect Tavuklu Burger</h3>
            <div className="info">
              <span>4.9</span>
              <span>(200)</span>
              <span className="menu-tittle">60₺</span>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default HomePage;
