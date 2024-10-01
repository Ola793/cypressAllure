/// <reference types="cypress" />

import { loginPage } from "./loginPage"

class MyAccountPage {
    get signoutLink() { return cy.get('.logout') }
    get pageHeading() { return cy.get('.page-heading') }

    public validateSuccessfulLogin() {
        // this.pageHeading.should('have.text', 'My account')
        this.pageHeading.should('be.visible').should('have.text', 'My account') // ensure the element is visible 
    }

    public logout() {
        // this.signoutLink.click()
        this.signoutLink.should('be.visible').click() // ensure the element is visible 
    }

    public validateSuccessfulLogout() {
        loginPage.signinLink.should('be.visible')
    }
}

export const myAccountPage: MyAccountPage = new MyAccountPage()