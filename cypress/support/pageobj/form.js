class RegForm {
  fillInValid(name, surname, email, password) {
    cy.get("#name").type(name);
    cy.get("#surname").type(surname);
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get('[type="submit"]').click();
    cy.get(".alert").then((el) => {
      cy.log(el[0].innerText);
      console.log(el[0].innerText);
      expect(el[0].innerText).includes(`Success! Hello: ${name} ${surname}`);
    });
  }

  fillInWihoutOneField(name, surname, email, password) {
    if (!name) {
      cy.get("#surname").type(surname);
      cy.get("#email").type(email);
      cy.get("#password").type(password);
      cy.get('[type="submit"]').click();
    } else if (!surname) {
      cy.get("#name").type(name);
      cy.get("#email").type(email);
      cy.get("#password").type(password);
      cy.get('[type="submit"]').click();
    } else if (!email) {
      cy.get("#name").type(name);
      cy.get("#surname").type(surname);
      cy.get("#password").type(password);
      cy.get('[type="submit"]').click();
    } else if (!password) {
      cy.get("#name").type(name);
      cy.get("#surname").type(surname);
      cy.get("#email").type(email);
      cy.get('[type="submit"]').click();
    }
  }
}

export default RegForm;
