/// <reference types="cypress"/>

abstract class BasePage {
    constructor(readonly url: string) {}
    
    visit() {
        cy.visit(this.url)
    }

    verifyUserRedirectedTo(pagename: pagePathEnum) {
        cy.url().should('include', pagename)
    }
}

export default BasePage;