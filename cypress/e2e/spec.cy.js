describe("Ana sayfa ve sipariş akışı", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174/"); 
  });
  // ACIKTIM butonuna basınca OrderForm görünür
  it("ACIKTIM butonuna basınca OrderForm görünür", () => {
    
    cy.get('button[aria-label="Giriş ekranındaki acıktım butonu"]').click();
    cy.get("form").should("exist")
  });





  // SİPARİŞ VER butonuna basınca sipariş formu açılır

   it("SİPARİŞ VER butonuna basınca sipariş formu açılır", () => {
    cy.get('button[aria-label="Özel Lezzetus sipariş butonu"]').click();
    cy.get('form').should('exist');
  });





// SİPARİŞ VER butonuna basınca sipariş formu açılır

  it("SİPARİŞ VER butonuna basınca sipariş formu açılır", () => {
    cy.get('button[aria-label="Hackathlon sipariş butonu"]').click();
    cy.get('form').should('exist');
  });


// SİPARİŞ VER butonuna basınca sipariş formu açılır


  it("SİPARİŞ VER butonuna basınca sipariş formu açılır", () => {
    cy.get('button[aria-label="NPM sipariş butonu"]').click();
    cy.get('form').should('exist');
  });




//Boyut Seçme




  it("Forumda Boyut Butonlarının hepsine basılabiliyor." , () => {
    cy.get('button[aria-label="Giriş ekranındaki acıktım butonu"]').click();
    cy.get("form").should("exist")
    cy.get('[data-cy="boyut-button-S"]').click()
    .should("have.css","background-color")
    .and("include","255");
    cy.get('[data-cy="boyut-button-M"]').click()
    .should("have.css","background-color")
    .and("include","255");
    cy.get('[data-cy="boyut-button-L"]').click()
    .should("have.css","background-color")
    .and("include","255");
  })




  //HAMUR KALINLIĞI




  it("Hamur Kalınlığı Seçimleri Yapılabiliyor" , () => {
  cy.get('button[aria-label="Giriş ekranındaki acıktım butonu"]').click();
  cy.get("form").should("exist")
  cy.get("#selectInput")
  .select("İnce")
  .should("have.value","İnce");
  cy.get("#selectInput")
  .select("Normal")
  .should("have.value","Normal");
  cy.get("#selectInput")
  .select("Kalın")
  .should("have.value","Kalın");
})




//11 malzeme seçme tesi




it("10'dan fazla malzeme seçildiğinde uyarı (toast) gösterilmeli", () => {
  cy.visit("http://localhost:5174/");
  cy.get('button[aria-label="Giriş ekranındaki acıktım butonu"]').click();
  cy.get("form").should("exist")

  const malzemeler = [
    'pepperoni', 'sosis', 'kanada-jambonu', 'tavuk-izgara',
    'soğan', 'domates', 'mısır', 'sucuk', 'jalepeno', 'sarımsak',
    'biber', 'peynir', 'ananas', 'kabak',
  ];

 
  malzemeler.slice(0, 10).forEach(malzeme => {
  cy.get(`[data-cy="checkbox-${malzeme}"]`)
    .parent('label')  // input'un parent label'ını seç
    .click();
});

cy.get(`[data-cy="checkbox-${malzemeler[10]}"]`)
  .parent('label')
  .click();

 cy.get('.Toastify__toast', { timeout: 5000 })
  .should('be.visible')
  .and('contain.text', 'En fazla 10 malzeme seçebilirsiniz');
});






  // 3 karakterden az isim girme

it("3 karakterden az girdiğinde hata", () => {
  cy.visit("http://localhost:5174/");
  cy.get('button[aria-label="Giriş ekranındaki acıktım butonu"]').click();
  cy.get("form").should("exist")

  const malzemeler = [
    'pepperoni', 'sosis', 'kanada-jambonu', 'tavuk-izgara',
    'soğan', 'domates', 'mısır', 'sucuk', 'jalepeno', 'sarımsak',
    'biber', 'peynir', 'ananas', 'kabak',
  ];

 
  malzemeler.slice(0, 5).forEach(malzeme => {
  cy.get(`[data-cy="checkbox-${malzeme}"]`)
    .parent('label') 
    .click();
});
  
  const testIsim = "Ah";
  cy.get('[data-cy="input-name"]')
    .clear()
    .type(testIsim)
    .should("have.value", testIsim);

  
  cy.get('[data-cy="submit-button"]').click();

  
  cy.contains('.Toastify__toast', "İsim en az 3 karakter olmalı.", { timeout: 5000 })
    .should("be.visible");
});





 //Tüm bilgileri girdiğinde sipariş alındı sayfasına yönlendirilmeli

 
  it("Tüm bilgileri girdiğinde sipariş alındı sayfasına yönlendirilmeli", () => {
  cy.visit("http://localhost:5174/");
  cy.get('button[aria-label="Giriş ekranındaki acıktım butonu"]').click();
  cy.get("form").should("exist")

  const malzemeler = [
    'pepperoni', 'sosis', 'kanada-jambonu', 'tavuk-izgara',
    'soğan', 'domates', 'mısır', 'sucuk', 'jalepeno', 'sarımsak',
    'biber', 'peynir', 'ananas', 'kabak',
  ];

 
  malzemeler.slice(0, 5).forEach(malzeme => {
  cy.get(`[data-cy="checkbox-${malzeme}"]`)
    .parent('label')  // input'un parent label'ını seç
    .click();
});

    const testIsim = "Emre ATASOY";
    cy.get('[data-cy="input-name"]')
      .clear()
      .type(testIsim)
      .should("have.value", testIsim);

    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="confirmation"]').should('exist');
    
  });
});
