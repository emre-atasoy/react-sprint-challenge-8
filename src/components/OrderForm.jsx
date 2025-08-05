import { useState } from "react"
import "./OrderForm.css"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast } from "react-toastify";
import Footer from "./Footer";


function OrderForm({ submitOrder,goHome }) {

  const [seciliMalzemeler, setSeciliMalzemeler] = useState([]);
  const [name, setName] = useState('');
  const fiyatPerMalzeme = 5;
  const [adet, setAdet] = useState(1);
  const [boyut, setBoyut] = useState("Küçük");
  const [hamur, setHamur] = useState("İnce");
  const secimlerTutari = seciliMalzemeler.length * fiyatPerMalzeme;
  const toplamTutar = adet * (85 + secimlerTutari);

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
    'Sucuk',
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
      if (seciliMalzemeler.length >= 10) {
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

  <div className="button-text-row info">
    <button
      onClick={goHome}
      style={{
        background: 'none',
        border: 'none',
        cursor: "pointer",
        color: "#5F5F5F",
      }}
    >
      Anasayfa -</button>
    <span className="siparis-yazi">Seçenekler -Sipariş Oluştur</span>
  </div>

  <h3 className="info">Position Absolute Acı Pizza</h3>
  
  <div className="info">
  <span className="for-bold">85.50₺</span>
  <div className="right-info">
    <span>4.9</span>
    <span>(200)</span>
  </div>
</div>

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
            <FormGroup check>
              <Input 
              type="radio" 
              name="secenek" 
              id="option1"
              value="Küçük"
              checked={boyut === "Küçük"}
              onChange={(e) => setBoyut(e.target.value)}/>
              <Label check htmlFor="option1">
                Küçük
              </Label>
            </FormGroup>
            <br />
            <FormGroup check>
              <Input 
              type="radio" 
              name="secenek" 
              id="option2" 
              value="Orta"
              checked={boyut === "Orta"}
              onChange={(e) => setBoyut(e.target.value)}/>
              <Label check htmlFor="option2">
                Orta
              </Label>
            </FormGroup>
            <br />
            <FormGroup check>
              <Input 
              type="radio" 
              name="secenek" 
              id="option3"
              value="Büyük"
              checked={boyut === "Büyük"}
              onChange={(e) => setBoyut(e.target.value)}/> 
              <Label check htmlFor="option3">
                Büyük
              </Label>
            </FormGroup>
          </FormGroup>
          </div>

          {/* Hamur seçimi */}
          <FormGroup className="hamur-secimi" >
            <legend htmlFor="selectInput">Hamur Seç</legend>
            <Input
              type="select"
              name="select"
              id="selectInput"
              style={{ width: '150px' }}
              value={hamur}
              onChange={(e) => setHamur(e.target.value)}
            >
              <option>İnce</option>
              <option>Normal</option>
              <option>Kalın</option>
            </Input>
          </FormGroup>

          {/* Ek Malzemeler */}
          <FormGroup>
            <Label style={{ fontWeight: "bold" }}>Ek Malzemeler</Label>
            <p style={{ color: "gray" }}>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="checkbox-container">
            {malzemeler.map((malzeme, index) => (
              <FormGroup check key={index}>
                <Input
                  type="checkbox"
                  value={malzeme}
                  id={`checkbox-${index}`}
                  checked={seciliMalzemeler.includes(malzeme)}
                  onChange={handleCheckBoxChange}
                />
                <Label check htmlFor={`checkbox-${index}`}>
                  {malzeme}
                </Label>
              </FormGroup>
            ))}
            </div>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="isimInput">İsim</Label>
            <Input
              type="text"
              name="isim"
              id="isimInput"
              placeholder="İsminizi girin"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="textareaInput">Sipariş Notu</Label>
            <Input
              rows="1"
              type="textarea"
              name="text"
              id="textareaInput"
              placeholder="Siparişe eklemek istediğin bir not var mı?"
              style={{ width: '560px' }}
            />
          </FormGroup>

          <div style={{ width: "100%", borderBottom: "1px solid #ccc", margin: "40px auto" }}></div>

          
            <div className="adet-kontrol">
          <Button type="button" onClick={decrease}>
            -
          </Button>
          <p>{adet}</p>
          <Button type="button" onClick={increase}>
            +
          </Button>
          </div>
            
          {/* Gönder butonu */}
          <div >
            Seçimler: {seciliMalzemeler.length * fiyatPerMalzeme}₺ Toplam:{' '}
            {adet * (85 + seciliMalzemeler.length * fiyatPerMalzeme)}₺
          </div>
          <FormGroup check>
  <Button
    type="button"
    onClick={() => {
      const order = {
        seciliMalzemeler,
        boyut,
        secimlerTutari,
        toplamTutar,
        

      };
      if (!name) {
        toast.error("Lütfen isminizi girin.");
        return;
      }

      submitOrder(order);
    }}
  >
    Gönder
  </Button>
</FormGroup>
        </div>
      </Form>
      <Footer/>
    </div>
  )
}

export default OrderForm;
