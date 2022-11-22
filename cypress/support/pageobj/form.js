class RegForm {
    fillIn(name, surname, email, password) {
        cy.visit('/')
        cy.get('#name').type(name)
        cy.get('#surname').type(surname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('[type="submit"]').click()
    }
}

export default RegForm;