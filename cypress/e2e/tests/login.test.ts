import { loginPage } from '../pages/loginPage'
import { myAccountPage } from '../pages/myAccountPage'

describe('Login Functionality', () => {
    // beforeEach(() => {
    beforeEach(function () { // use the regular function instead of the arrow one (this should be bound to test context)
        loginPage.launchApplication()
        // cy.fixture('users.json').then(function (data) {
        //     this.data = data;
        // })
        cy.fixture('users.json').then((data) => this.data = data) // use the arrow function instead of the regular one (this should get external context)
    })
// add empty lines between blocks for better readability

    it('login with valid credentials', function () {
        // loginPage.login("testautomation@cypresstest.com", "Test@1234")
        loginPage.login(this.data.valid_credentials.emailId, 
                        this.data.valid_credentials.password) // use variables instead of explicit data
        myAccountPage.validateSuccessfulLogin()
        myAccountPage.logout()
        myAccountPage.validateSuccessfulLogout()
    })
// add empty lines between blocks for better readability

    it('login with valid credentials read data from fixture', function () {
        // loginPage.login(this.data.valid_credentials.emailId, this.data.valid_credentials.password)
        loginPage.login(this.data.valid_credentials.emailId, 
                        this.data.valid_credentials.password) // put variables one under another for better readability
        myAccountPage.validateSuccessfulLogin()
        myAccountPage.logout()
        myAccountPage.validateSuccessfulLogout()
    })
// add empty lines between blocks for better readability

    it('login with invalid email credentials read data from fixture', function () {
        // loginPage.login(this.data.invalid_credentials.invalid_email.emailId, 
        //     this.data.invalid_credentials.invalid_email.password)
        loginPage.login(this.data.invalid_credentials.invalid_email.emailId, 
                        this.data.invalid_credentials.invalid_email.password) // put variables one under another for better readability
        loginPage.validateLoginError('Authentication failed.')
    })
// add empty lines between blocks for better readability

    it('login with invalid password credentials read data from fixture', function () {
        // loginPage.login(this.data.invalid_credentials.invalid_password.emailId, 
        //     this.data.invalid_credentials.invalid_password.password)
        loginPage.login(this.data.invalid_credentials.invalid_password.emailId, 
                        this.data.invalid_credentials.invalid_password.password) // put variables one under another for better readability
        loginPage.validateLoginError('Authentication failed.')
    })
// add empty lines between blocks for better readability

    it('login with wrong email format credentials read data from fixture', function () {
        // loginPage.login(this.data.invalid_credentials.wrong_email_format.emailId, this.data.invalid_credentials.wrong_email_format.password)
        loginPage.login(this.data.invalid_credentials.wrong_email_format.emailId, 
                        this.data.invalid_credentials.wrong_email_format.password) // put variables one under another for better readability
        // loginPage.validateLoginError('Invalid email addressssss.')
        loginPage.validateLoginError('Invalid email address.') // delete 4 extra 's'
    })
})