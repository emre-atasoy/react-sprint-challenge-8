import { useState } from "react"
import "./OrderForm.css"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function OrderForm({goHome}) {

  
  return (
    
      <div>
        <header className="header">
          <h2 className="title">Teknolojik Yemekler</h2>
          <button onClick={goHome} style={{
            background: 'none',
            border: 'none',
            cursor:"pointer",
            color:"#5F5F5F"
            ,
          }}>Anasayfa - </button><span style={{color:"white"}}>Sipariş Oluştur</span>
        </header>

        <section>
          <h3>Position Absolute Acı Pizza</h3>
        <div className="info">
          <span>85.50₺</span>
          <span>4.9</span>
          <span className="menu-tittle">(200)</span>
        </div>

        <p>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza; domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak
          ve düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
          <Form>
          {/* Boyut seçimi */}
          <FormGroup tag="fieldset">
            <legend>Boyut Seç</legend>
            <FormGroup check>
              <Input type="radio" name="secenek" id="option1" />
              <Label check for="option1">
                Küçük
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input type="radio" name="secenek" id="option2" />
              <Label check for="option2">
                Orta
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input type="radio" name="secenek" id="option3" />
              <Label check for="option3">
                Büyük
              </Label>
            </FormGroup>
          </FormGroup>

          {/* Hamur seçimi */}
          <FormGroup>
            <Label for="selectInput">Hamur Seç</Label>
            <Input
              type="select"
              name="select"
              id="selectInput"
              style={{ width: '150px' }}
            >
              <option>İnce</option>
              <option>Normal</option>
              <option>Kalın</option>
            </Input>
          </FormGroup>
          </Form>

        </section>
      </div>
    
  )
}

export default OrderForm
