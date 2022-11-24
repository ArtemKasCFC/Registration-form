class RegForm {
  fillInValid(name, surname, email, password) {
    cy.get("#name").type(name);
    cy.get("#surname").type(surname);
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get('[type="submit"]').click();
    cy.get(".alert").then((el) => {
      expect(el[0].innerText).includes(`Success! Hello: ${name} ${surname}`);
    });
  }

  fillInNotValidLength(name, surname, email, password) {
    cy.get("#name").type(name);
    cy.get("#surname").type(surname);
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get('[type="submit"]').click();
    cy.get(".alert").then((el) => {
        if(name.length < 2 || name.length > 128){
            expect(el[0].innerText).includes(`Error: Name Field length must be between 2 and 128`);
        } else if(surname.length < 2 || surname.length > 128){
            expect(el[0].innerText).includes(`Error: Surname Field length must be between 2 and 128`);
        } else if(email.length < 10 || email.length > 114){
            const addressSign = email.search('@'),
                  lastPoint = email.lastIndexOf('.'),
                  secondPart = lastPoint - addressSign,
                  thirdPart = email.length - lastPoint
                  if(addressSign < 4 || addressSign > 64){
                    expect(el[0].innerText).includes(`Error: Before "@" length must be between 4 and 64`);
                } else if (secondPart < 3 || secondPart > 33){
                    expect(el[0].innerText).includes(`Error: After "@" and before "." length must be between 2 and 32`);
                } else if(thirdPart < 3 || thirdPart > 17){
                    expect(el[0].innerText).includes(`Error: Before last "." length must be between 2 and 16`);
                } else{
                    expect(el[0].innerText).includes(`Error: Email Field length must be between 10 and 114`);
                }
        } else if(password.length < 8 || password.length > 16){
            expect(el[0].innerText).includes(`Error: Password Field length must be between 8 and 16`);
        }
    });
  }

  fillInWihoutOneField(name, surname, email, password) {
    if (!name) {
      cy.get("#surname").type(surname);
      cy.get("#email").type(email);
      cy.get("#password").type(password);
    } else if (!surname) {
      cy.get("#name").type(name);
      cy.get("#email").type(email);
      cy.get("#password").type(password);
    } else if (!email) {
      cy.get("#name").type(name);
      cy.get("#surname").type(surname);
      cy.get("#password").type(password);
    } else if (!password) {
      cy.get("#name").type(name);
      cy.get("#surname").type(surname);
      cy.get("#email").type(email);
    } else {
      cy.get("#name").type(name);
      cy.get("#surname").type(surname);
      cy.get("#email").type(email);
      cy.get("#password").type(password);
    }
    cy.get('[type="submit"]').click();
    cy.get(".alert").then((el) => {
      if (!name) {
        expect(el[0].innerText).includes(`Error: Name Field is Required`);
      } else if (!email) {
        expect(el[0].innerText).includes(`Error: Email Field is Required`);
      } else if (!password) {
        expect(el[0].innerText).includes(`Error: Password Field is Required`);
      } else {
        expect(el[0].innerText).includes(`Success! Hello: ${name} ${surname}`);
      }
    });
  }
}

export default RegForm;
