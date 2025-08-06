import "./OrderConfirmation.css"

export default function OrderConfirmation ({goHome,orderData}) {
  
  return (
   <div className="page-styles">
      <h2 className="top-title">Teknolojik Yemekler</h2>
      <p className="subtitle">lezzetin yolda</p>
      <h2 className="main-title">SİPARİŞ ALINDI</h2>
      <div style={{ width: "40%", borderBottom: "1px solid #ccc", margin: "20px auto" }}></div>
      <p style={{
        fontWeight:"bold",
        fontSize:"22px",
        paddingRight:"60px",
      }}>Position Absolute Acı Pizza</p>
      <br />
      <br />
      <div className="p-tags">
        <p>Boyut: <span style={{ color: "white", fontWeight: "bold" }}>{orderData.boyut}</span></p>
        <p>Hamur: <span style={{ color: "white", fontWeight: "bold" }}>{orderData.hamur}</span></p>
        <p style={{maxWidth:"300px"}}>Ek Malzemeler: <span style={{ color: "white", fontWeight: "bold" }}>{orderData.seciliMalzemeler.join(",")}</span></p>
        </div>
      <div className="border">
        <h6 style={{fontWeight:"bold",
          paddingRight:"102px",
          fontSize:"18px"
        }}>Sipariş Toplamı</h6>
        <br />
        <p>Seçimler <span style={{marginLeft:"140px"}}/>  {orderData.secimlerTutari}₺</p>
        <p>Toplam  <span style={{marginLeft:"129px",}}/> {orderData.toplamTutar}₺</p>
        </div>
      <button className="top-button" onClick={goHome}>Anasayfaya Dön</button>

      
    </div>
  )
}

