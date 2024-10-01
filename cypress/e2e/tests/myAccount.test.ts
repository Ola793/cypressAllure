import { loginPage } from "../pages/loginPage"; // the variable is declared, but not used

describe('My Account Functionality', () => {
    beforeEach(() => {
        cy.visit('https://google.com'); 
        //loginPage.launchApplication()
    })
// add empty lines between blocks for better readability

    it('Sample Test', () => {
        console.log("This is a sample test")
    })
})