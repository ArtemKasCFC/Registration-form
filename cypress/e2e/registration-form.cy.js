///<reference types="cypress"/>
import RegForm from '../support/pageobj/form'
import Random from '../support/pageobj/random'

describe('Registration form', () => {

  const regForm = new RegForm(),
        random = new Random();

  const randomNameOrSurname = random.nameSurname(2,128),
        minNameOrSurname = random.nameSurname(2,2),
        maxNameorSurname = random.nameSurname(128,128),
        minPlusOneNOS = random.nameSurname(3,3),
        maxMinusOneNOS = random.nameSurname(127,127),
        minMinusOneNOS = random.nameSurname(1,1),
        maxPlusOneNOS = random.nameSurname(129,129),
        randomEmail = random.email(4,64,2,32,2,16),
        minEmail = random.email(4,4,2,2,2,2),
        maxEmail = random.email(64,64,32,32,16,16),
        minPlusOneE = random.email(5,5,2,2,2,2),
        minPlusOneAllPartsE = random.email(5,5,3,3,3,3),
        maxMinusOneE = random.email(63,63,32,32,16,16),
        maxMinusOneAllPartsE = random.email(63,63,31,31,15,15),
        minMinusOne1PartE = random.email(3,3,2,2,2,2),
        minMinusOne2PartE = random.email(4,4,1,1,2,2),
        minMinusOne3PartE = random.email(4,4,2,2,1,1),
        maxPlusOne1PartE = random.email(65,65,32,32,16,16),
        maxPlusOne2PartE = random.email(64,64,33,33,16,16),
        maxPlusOne3PartE = random.email(64,64,32,32,17,17),
        randomPassword = random.password(8,16),
        minPassword = random.password(8,8),
        maxPassword = random.password(16,16),
        minPlusOneP = random.password(9,9),
        maxMinusOneP = random.password(15,15),
        minMinusOneP = random.password(7,7),
        maxPlusOneP = random.password(17,17);

  

  it('Check registration by filling in the fields with min valid values.', () => {
    regForm.fillIn(minNameOrSurname, minNameOrSurname,minEmail,minPassword);
  })
})