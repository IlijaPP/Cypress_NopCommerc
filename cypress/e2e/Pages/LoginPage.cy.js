export class loginPage_class {
    LogInForm = "//div[@class='returning-wrapper fieldset']"
    RegisterForm = "//div[@class='new-wrapper register-block']"
    InputEmail  = "//*[@id='Email']"
    InputPassword = "//*[@id='Password']"
    RememberMeCheckBox = "//*[@id='RememberMe']"
    ForgotPassword = "//a[@href='/passwordrecovery']"
    LogInButton = "//button[@class='button-1 login-button']"
    RegisterButton = "//button[@class='button-1 register-button']"
    PasswordRecovery = "//*[text()='Password recovery']"
    RecoveryEmailField = "//div[@class='inputs']/input"
    RecoveryButton = "//button[@class='button-1 password-recovery-button']"
    RecoveryAlert = "//p[@class='content']"
    SuccessfulLogIn = "//div[@class='topic-block-title']"
    UnsuccessfulLogin = "//div[@class='message-error validation-summary-errors']"
    LogInError = "//div[@class='message-error validation-summary-errors']/ul"
    InvalidEmail = "//*[@id='Email-error']"

    login(email,password) { 
        cy.xpath(this.InputEmail).type(email)
        cy.xpath(this.InputPassword).type(password)
        cy.xpath(this.LogInButton).click()
    }

    validate_login(message) {
        cy.xpath(this.UnsuccessfulLogin).should('include.text',message)
    }

    clear_fields() {
        cy.xpath(this.InputEmail).clear()
        cy.xpath(this.InputPassword).clear()
    }
}