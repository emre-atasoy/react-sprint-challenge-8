import { useState } from "react"
import "./OrderForm.css"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast } from "react-toastify";
import Footer from "./Footer";





function OrderForm({ submitOrder,goHome }) {
  const [seciliMalzemeler, setSeciliMalzemeler] = useState([]);
  const [name, setName] = useState('');
  const [adet, setAdet] = useState(1);
  const [boyut, setBoyut] = useState("S");
  const [hamur, setHamur] = useState("Hamur Kalınlığı Seç");
  
  const fiyatPerMalzeme = 5;
  const secimlerTutari = seciliMalzemeler.length * fiyatPerMalzeme;
  const toplamTutar = adet * (85.50 + secimlerTutari);
  
/* Seçilen Radio Buttonları */
  const buttons = ["S", "M", "L"];

  const malzemeler = [
    'Pepperoni',
    'Sosis',
    'Kanada Jambonu',
    'Tavuk Izgara',
    'Soğan',
    'Domates',
    'Mısır',
    'Sucuk',
    'Jalepeno',
    'Sarımsak',
    'Biber',
    'Peynir',
    'Ananas',
    "Kabak",
  ];

  const increase = () => {
    setAdet(adet + 1);
  };
  const decrease = () => {
    if (adet <= 1) {
      return;
    }
    setAdet(adet - 1);
  };

  const handleCheckBoxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      if (seciliMalzemeler.length >= 10 ) {
        toast.warn("En fazla 10 malzeme seçebilirsiniz.");
        return;
      }
      setSeciliMalzemeler([...seciliMalzemeler, value]);
    } else {
      setSeciliMalzemeler(seciliMalzemeler.filter((item) => item !== value));
    }
  };

  return (

    

    
    <div>
      <header className="header">
        <h2 className="top-titlee">Teknolojik Yemekler</h2>
      </header>

      <main className="information-absolute">

  <img 
    src="/assets/iteration-2-images/pictures/food-2.png" 
    alt="absolute-acılı-pizza"
  />
<div className="button-text-row" style={{ display: "inline" }}>
  <button
    onClick={goHome}
    style={{
      background: 'none',
      border: 'none',
      cursor: "pointer",
      color: "#5F5F5F",
      padding: 0,
      fontSize: "inherit",
      display: "inline",
    }}
  >
    Anasayfa
  </button>{" "}
  - Seçenekler -{" "}
  <span style={{ color: "red" }}>Sipariş Oluştur</span>
</div>




  <h3 style={{fontWeight:"bold"}}className="info">Position Absolute Acı Pizza</h3>
  
  <div className="info">
  <span className="for-bold">85.50₺</span>
  <div className="right-info">
    <span>4.9</span>
    <span>(200)</span>
  </div>
</div>
<br />
  <p className="aciklama">
    Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
    pizza tam sana göre. Pizza; domates, peynir ve genellikle çeşitli
    diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
    ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak
    ve düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
    lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
  </p>
</main>


      
      <Form>
       
        <div className="secim-grubu">

          <div className="boyut-secimi">

          {/* Boyut seçimi */}
          <FormGroup tag="fieldset">
            <legend>Boyut Seç</legend>
            
                   <div>
      {buttons.map((btn, idx) => (
  <button
    data-cy={`boyut-button-${btn}`}
    key={idx}
    type="button"
    onClick={() => setBoyut(btn)}
    style={{
      marginRight: 21,
      padding: "14px 19px",
      backgroundColor: boyut === btn ? "orange" : "#faf7f2",
      color: "black",
      border: "none",
      borderRadius: 999,
      cursor: "pointer",
      
    }}
  >
    {btn}
  </button>
      ))}
    </div>
</FormGroup>
   </div>      

          {/* Hamur seçimi */}
          <FormGroup className="hamur-secimi" >
            <legend htmlFor="selectInput">Hamur Seç</legend>
            <Input
              type="select"
              name="select"
              id="selectInput"
              style={{ paddingLeft:"15px", width: '220px', backgroundColor:"#faf7f2" }}
              value={hamur}
              onChange={(e) => setHamur(e.target.value)}
            >
              <option>--Hamur Kalınlığı Seç--</option>
              <option>İnce</option>
              <option>Normal</option>
              <option>Kalın</option>
            </Input>
          </FormGroup>
            


         
          {/* Ek Malzemeler */}
        <div style={{paddingTop:"30px",
          paddingBottom:"15px"}}className="checkbox-container">
   {malzemeler.map((malzeme, index) => (
    <label className="container-checkbox" key={index}>
      <input
        data-cy={`checkbox-${malzeme.toLowerCase().replace(/ /g, "-")}`}
        type="checkbox"
        value={malzeme}
        checked={seciliMalzemeler.includes(malzeme)}
        onChange={handleCheckBoxChange}
      />
      <span className="checkmark"></span>
      <span className="label-text">{malzeme}</span>
    </label>
  ))}
      </div>
           
          <FormGroup className="mobil-isim-aciklama">
            <Label  style={{fontFamily:"Barlow"}}htmlFor="isimInput">İsim</Label>
            <Input
              data-cy="input-name"
              type="text"
              name="isim"
              id="isimInput"
              placeholder="İsminizi girin"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "600px",
                backgroundColor:'#faf7f2',
              }}
            />
          </FormGroup>

          <FormGroup className="mobil-isim-aciklama">
            <Label style={{fontFamily:"Barlow"}} htmlFor="textareaInput">Sipariş Notu</Label>
            <Input
              rows="1"
              type="textarea"
              name="text"
              id="textareaInput"
              placeholder="Siparişe eklemek istediğin bir not var mı?"
              style={{ width: '600px',
                backgroundColor:'#faf7f2',
               }}
            />
          </FormGroup>
   
          <div style={{ width: "100%", borderBottom: "1px solid #ccc", margin: "40px auto" }}></div>

          <div className="order-controls-container">
  <div className="adet-kontrol">
    <Button type="button" onClick={decrease}>-</Button>
    <p>{adet}</p>
    <Button type="button" onClick={increase}>+</Button>
  </div>

  <div className="order-summary-vertical">
    <div style={{
      border:"1px solid white",
      backgroundColor:'#faf7f2',
      padding:"20px 50px",
      fontFamily:"Barlow"
    }}>
    <h6>Sipariş Toplamı</h6>
    <br />
    <div style={{color:"gray",}}>Seçimler<span style={{marginLeft:"120px"}}/>{seciliMalzemeler.length * fiyatPerMalzeme}₺</div>
    <br />
    <div style={{
      color:"red"
    }}>Toplam <span style={{marginLeft:"120px"}}/> {toplamTutar}₺</div>
    </div>
    <Button
      data-cy="submit-button"
      type="button"
      onClick={() => {
        if (!name || name.trim().length < 3 ) {
          toast.error("İsim en az 3 karakter olmalı.");
          return;
        }
        const order = {
          seciliMalzemeler,
          boyut,
          hamur,
          secimlerTutari,
          toplamTutar,
          adet,
          name,
        };
        submitOrder(order);
      }}
    >
      SİPARİŞ VER
    </Button>
  </div>
</div>

        </div>
      </Form>
      <Footer/>
    </div>
  )
}

export default OrderForm;
