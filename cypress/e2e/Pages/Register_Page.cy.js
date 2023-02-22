export class register_class {
    SexMale = "//*[@id='gender-male']"
    SexFemale = "//*[@id='gender-female']"
    InputRegisterName = "//*[@id='FirstName']"
    InputRegisterLastName = "//*[@id='LastName']"
    DayOfBirth = "//*[@name='DateOfBirthDay']"
    MonthOfBirth = "//*[@name='DateOfBirthMonth']"
    YearOfBirth = "//*[@name='DateOfBirthYear']"
    RegisterEmail = "//*[@id='Email']"
    InputCompany = "//*[@id='Company']"
    NewsLetterCheckbox = "//*[@id='Newsletter']"
    InputPassword = "//*[@id='Password']"
    InputConfirmPassword = "//*[@id='ConfirmPassword']"
    RegisterButton = "//*[@name='register-button']"
    SuccessfulRegistration = "//div[@class='result']"
    WrongEmailError = "//*[text()='Wrong email']"
    UsedEmailError = "//div[@class='message-error validation-summary-errors']"
    MissingConfirmPassword = "//*[@id='ConfirmPassword-error']"
    MissingPassword = "//*[@id='Password-error']"
    FirstNameError = "//*[@id='FirstName-error']"
    LastNameError = "//*[@id='LastName-error']"
    Button_complete = "//a[@class='button-1 register-continue-button']"

    register_User(firstName,lastName,dayofBirth,monthofBirth,yearofBirth,registerEmail,password,confirmPassword) {
        cy.xpath(this.SexFemale).click()
        cy.xpath(this.InputRegisterName).type(firstName)
        cy.xpath(this.InputRegisterLastName).type(lastName)
        cy.xpath(this.DayOfBirth).select(dayofBirth)
        cy.xpath(this.MonthOfBirth).select(monthofBirth)
        cy.xpath(this.YearOfBirth).select(yearofBirth)
        cy.xpath(this.RegisterEmail).type(registerEmail)
        cy.xpath(this.InputPassword).type(password)
        cy.xpath(this.InputConfirmPassword).type(confirmPassword)
        cy.xpath(this.RegisterButton).click()
    }

    validate_user_is_registered(expected) {
        cy.xpath(this.SuccessfulRegistration).should('contain',expected)
        cy.xpath(this.Button_complete).should('be.visible')
        cy.xpath(this.Button_complete).click()
    }

}


