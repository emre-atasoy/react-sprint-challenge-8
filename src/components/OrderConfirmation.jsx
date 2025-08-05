import "./OrderConfirmation.css"

export default function OrderConfirmation ({goHome,orderData}) {
  
  return (
   <div className="page-styles">
      <h2 className="top-title">Teknolojik Yemekler</h2>
      <p className="subtitle">lezzetin yolda</p>
      <h2 className="main-title">SİPARİŞ ALINDI</h2>
      <div style={{ width: "40%", borderBottom: "1px solid #ccc", margin: "20px auto" }}></div>
      <p className="font-1">Position Absolute Acı Pizza</p>
        <p className="font-2">Boyut {orderData.boyut}</p>
        <p className="font-2">Hamur: {orderData.hamur}</p>
        <p className="font-2">Ek Malzemeler: {orderData.seciliMalzemeler.join(",")}</p>
        
      <div className="border">
        <p>Seçimler  {orderData.secimlerTutari}</p>
        <p>Toplam  {orderData.toplamTutar}</p>
        </div>
      <button className="top-button" onClick={goHome}>Anasayfaya Dön</button>

      
    </div>
  )
}

