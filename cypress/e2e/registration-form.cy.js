///<reference types="cypress"/>
import RegForm from '../support/pageobj/form'
import Random from '../support/pageobj/random'

describe('empty spec', () => {

  const regForm = new RegForm()
  const random = new Random()

  let nameLeng = random.getRandomInt(2, 128),
      surnameLeng = random.getRandomInt(2, 128),
      emailOne = random.getRandomInt(4, 62),
      emailTwo = random.getRandomInt(2, 32),
      emailThree = random.getRandomInt(2, 16),
      passwordLeng = random.getRandomInt(8, 16)

  it('', () => {
    let name = random.nameSurname(nameLeng),
    surname = random.nameSurname(surnameLeng),
    email = random.email(emailOne, emailTwo, emailThree),
    password = random.password(passwordLeng)

    regForm.fillIn(name, surname, email, password)
    // cy.get('.alert').contains(`Success! Hello: ${name} ${surname}`)
    // cy.get('.alert').invoke('text').then($el => {
    //   let regexp = /\n/g
    //   $el = $el.replace(regexp, '').trim()
    //   expect($el).include(`Success! Hello: ${name} ${surname}`)
    // })

  })
})