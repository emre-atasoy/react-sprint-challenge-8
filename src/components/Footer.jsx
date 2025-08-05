export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img
            src="/assets/iteration-2-images/footer/logo-footer.svg"
            alt="Teknolojik Yemekler"
          />
          <div className="footer-info">
            <img
              src="/assets/iteration-2-images/footer/icons/icon-1.png"
              alt="Konum"
            />
            <p>
              341 Londonderry Road
              <br />
              İstanbul Türkiye
            </p>
          </div>
          <div className="footer-info">
            <img
              src="/assets/iteration-2-images/footer/icons/icon-2.png"
              alt="Mail"
            />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div className="footer-info">
            <img
              src="/assets/iteration-2-images/footer/icons/icon-3.png"
              alt="Telefon"
            />
            <p>+90 216 123 45 87</p>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-h">Hot Menu</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-h">Instagram</h4>
          <div className="instagram-grid">
            <img
              src="/assets/iteration-2-images/footer/insta/li-0.png"
              alt="1"
            />
            <img
              src="/assets/iteration-2-images/footer/insta/li-1.png"
              alt="2"
            />
            <img
              src="/assets/iteration-2-images/footer/insta/li-2.png"
              alt="3"
            />
            <img
              src="/assets/iteration-2-images/footer/insta/li-3.png"
              alt="4"
            />
            <img
              src="/assets/iteration-2-images/footer/insta/li-4.png"
              alt="5"
            />
            <img
              src="/assets/iteration-2-images/footer/insta/li-5.png"
              alt="6"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2023 Teknolojik Yemekler. <i className="fa-brands fa-twitter"></i>
      </div>
    </footer>
  );
}
