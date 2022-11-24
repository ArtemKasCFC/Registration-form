///<reference types="cypress"/>
import RegForm from "../support/pageobj/form";
import Random from "../support/pageobj/random";

describe("Registration form", () => {
  const regForm = new RegForm(),
        random = new Random();

  const randomName = random.nameSurname(2, 128),
        randomSurname = random.nameSurname(2, 128),
        randomEmail = random.email(4, 64, 2, 32, 2, 16),
        randomPassword = random.password(8, 16),
        minPlusOneAllLengthE = random.email(5, 5, 3, 3, 3, 3),
        maxMinusOneAllLengrhE = random.email(63, 63, 31, 31, 15, 15)
  
  beforeEach(() => {
    cy.visit('/')
  })     
  
  it.skip("Check tab, title and labels of the page", () => {
    cy.url().should('eql', 'http://itcareer.pythonanywhere.com/');
    cy.title().should('eql', 'Demo Form');
    cy.get('h2').invoke('text').should('eql','ITCareerToday web form')
    cy.get('label').each(($el, ind) =>{
      const lables = ['Name:', 'Surname:', 'Email:', 'Password:']
      expect($el.text()).includes(lables[ind])
    })
    //Label suname instead of surname
  });

  it.skip("Check registration by filling in the fields with min valid values.", () => {
    const minName = random.nameSurname(2, 2),
          minSurname = random.nameSurname(2, 2),
          minEmail = random.email(4, 4, 2, 2, 2, 2),
          minPassword = random.password(8, 8)
          
    regForm.fillInValid(minName, minSurname, minEmail, minPassword);
    //Name field requires minimum 4 symbols;
    });

  it.skip("Check registration by filling in the fields with max valid values.", () => {
    const maxName = random.nameSurname(128, 128),
          maxSurname = random.nameSurname(128, 128),
          maxEmail = random.email(64, 64, 32, 32, 16, 16),
          maxPassword = random.password(16, 16)
    
    regForm.fillInValid(maxName, maxSurname, maxEmail, maxPassword);
    //Name field requires maximum 25 symbols;
  });

  it.skip("Check registration by filling in the fields with min+1 valid values.", () => {
    const minPlusOneN = random.nameSurname(3, 3),
          minPlusOneS = random.nameSurname(3, 3),
          minPlusOneE = random.email(5, 5, 2, 2, 2, 2),
          minPlusOneP = random.password(9, 9)
    
    regForm.fillInValid(minPlusOneN, minPlusOneS, minPlusOneE, minPlusOneP);
  });

  it.skip("Check registration by filling in the fields with max-1 valid values.", () => {
    const maxMinusOneN = random.nameSurname(127, 127),
          maxMinusOneS = random.nameSurname(127, 127),
          maxMinusOneE = random.email(63, 63, 32, 32, 16, 16),
          maxMinusOneP = random.password(15, 15)
    
    regForm.fillInValid(maxMinusOneN, maxMinusOneS, maxMinusOneE, maxMinusOneP);
  });

  it.skip("Check registration by filling in the Name field with min-1 valid values.", () => {
    const minMinusOneN = random.nameSurname(1, 1)
    
    regForm.fillInNotValidLength(minMinusOneN, randomSurname, randomEmail, randomPassword);
    // Error about NameLength 
  });

  it.skip("Check registration by filling in the Name field with max+1 valid values.", () => {
    const maxPlusOneN = random.nameSurname(129, 129)
    
    regForm.fillInNotValidLength(maxPlusOneN, randomSurname, randomEmail, randomPassword);
  });

  it.skip("Check registration by filling in the Surname field with min-1 valid values.", () => {
    const minMinusOneS = random.nameSurname(1, 1)
    
    regForm.fillInNotValidLength(randomName, minMinusOneS, randomEmail, randomPassword);
    //Surname field accepts 1 symbol (min -1);
  });

  it.skip("Check registration by filling in the Surname field with max+1 valid values.", () => {
    const maxPlusOneS = random.nameSurname(129, 129)
    
    regForm.fillInNotValidLength(randomName, maxPlusOneS, randomEmail, randomPassword);
    //Error about Surname length
    //Surname field accept 129 symbol (max +1)
  });

  it.skip("Check registration by filling in the Email field with min-1 valid values before '@'.", () => {
    const minMinusOne1PartE = random.email(3, 3, 2, 2, 2, 2)
    
    regForm.fillInNotValidLength(randomName, randomSurname, minMinusOne1PartE, randomPassword);
    // Error about length
  });

  it.skip("Check registration by filling in the Email field with max+1 valid values before '@'.", () => {
    const maxPlusOne1PartE = random.email(65, 65, 32, 32, 16, 16)
    
    regForm.fillInNotValidLength(randomName, randomSurname, maxPlusOne1PartE, randomPassword);
  });

  it.skip("Check registration by filling in the Email field with min-1 valid values after '@' and before last '.'.", () => {
    const minMinusOne2PartE = random.email(4, 4, 1, 1, 2, 2)
    
    regForm.fillInNotValidLength(randomName, randomSurname, minMinusOne2PartE, randomPassword);
  });

  it.skip("Check registration by filling in the Email field with max+1 valid values after '@' and before last '.'.", () => {
    const maxPlusOne2PartE = random.email(64, 64, 33, 33, 16, 16)
    
    regForm.fillInNotValidLength(randomName, randomSurname, maxPlusOne2PartE, randomPassword);
  });

  it.skip("Check registration by filling in the Email field with min-1 valid values after last '.'.", () => {
    const minMinusOne3PartE = random.email(4, 4, 2, 2, 1, 1)
    
    regForm.fillInNotValidLength(randomName, randomSurname, minMinusOne3PartE, randomPassword);
  });

  it.skip("Check registration by filling in the Email field with max+1 valid values after last '.'.", () => {
    const maxPlusOne3PartE = random.email(64, 64, 32, 32, 17, 17)
    
    regForm.fillInNotValidLength(randomName, randomSurname, maxPlusOne3PartE, randomPassword);
  });

  it.skip("Check registration by filling in the Password field with min-1 valid values.", () => {
    const minMinusOneP = random.password(7, 7)
    
    regForm.fillInNotValidLength(randomName, randomPassword, randomEmail, minMinusOneP);
  });

  it.skip("Check registration by filling in the Password field with max+1 valid values.", () => {
    const maxPlusOneP = random.password(17, 17)
    
    regForm.fillInNotValidLength(randomName, randomSurname, randomEmail, maxPlusOneP);
  });

  it.skip("Check that Name field is required.", () => {
    regForm.fillInWihoutOneField('', randomSurname, randomEmail, randomPassword);
  });

  it.skip("Check that Email field is required.", () => {
    regForm.fillInWihoutOneField(randomName, randomSurname, '', randomPassword);
  });

  it.skip("Check that Password field is required.", () => {
    regForm.fillInWihoutOneField(randomName, randomSurname, randomEmail, '');
  });

  it.skip("Check that Surname field is not required.", () => {
    regForm.fillInWihoutOneField(randomName, "", randomEmail, randomPassword);
  });

  it.skip("Check", () => {
    /**
     *
            5 = Email field accepts 9 symbols (min -1)
                5.1 Before '@' accepts 3 symbol (min -1)
                5.2 Before last '.' accepts 1 symbol (min -1)
                5.3 After last '.' accepts 1 symbol (min -1)
            6 = Email field accepts 115 symbols (max +1)
                6.1 Before '@' accepts 65 symbol (max +1)
                6.2 Before last '.' accepts 33 symbol (max +1)
                6.3 After last '.' accepts 17 symbol (max +1) 
            7 = Password field accepts 7 sym (min -1) 
            8 = Password field accepts 17 sym (max +1)
            9 = Surname is the required field
           10 = Email is not required field
           11 = Password is not required field
           13 = Name error
           14 = Email error
           15 = Password error
           16 = SurName error
     */
    const ranName = random.nameSurname(4, 4), //2 - 128
    ranSurname = random.nameSurname(2, 2),
    ranEmail = random.email(4, 64, 2, 32, 1, 1), // 4 - 64, 2 - 32, 2 - 16
    ranPassword = random.password(8, 8) // 8 - 16
    regForm.fillInWihoutOneField(ranName, ranSurname, ranEmail, ranPassword);
  });
});