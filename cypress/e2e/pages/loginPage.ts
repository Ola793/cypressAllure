/// <reference types="cypress" />

class LoginPage {
    get signinLink() { return cy.get('.login') }
    get emailAddressTxt() { return cy.get('#email') }
    get passwordTxt() { return cy.get('#passwd') }
    get signinBtn() { return cy.get('#SubmitLogin') }
    get alertBox() { return cy.get('p:contains("error")')} // it's better to use more specific selector
    get alertMessage() { return cy.get('.alert-danger > ol > li') }
    
    public launchApplication() {
        cy.visit('/')
    }

    public login(emailId: string, password: string) {
        // this.signinLink.click()
        this.signinLink.should('be.visible').click() // ensure the element is visible 
        // this.emailAddressTxt.type(emailId)
        this.emailAddressTxt.should('be.visible').type(emailId) // ensure the element is visible
        // this.passwordTxt.type(password)
        this.passwordTxt.should('be.visible').type(password) // ensure the element is visible 
        // this.signinBtn.click()
        this.signinBtn.should('be.visible').click() // ensure the element is visible 
    }

    public validateLoginError(errorMessage: string) {
        this.alertBox.should('be.visible')
        // this.alertMessage.should('have.text', errorMessage)
        this.alertMessage.should('have.text', errorMessage.trim()) // trim to avoid minor text format issues
    }
}

export const loginPage: LoginPage = new LoginPage()