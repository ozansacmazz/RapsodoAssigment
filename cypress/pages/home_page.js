class homePage{
    

    homePage_computers = '.top-menu > :nth-child(2) > [href="/computers"]'
    homePage_desktops = ':nth-child(1) > .sub-category-item > .picture > a > img'
    homePage_desktops_title = 'Demo Web Shop. Desktops'
    homePage_cart = '.cart-qty'
    
    
    navigate(url) {

        cy.visit(url)

    }

    verifyUrl(url) {

        cy.url().should('eq',url)
    }

    clickOnComputers() {
        cy.get(this.homePage_computers).click()
    }

    clickOnDesktop() {

        cy.get(this.homePage_desktops).click()
    }

    verifyTitleAndCart(){

        cy.title().should('eq', this.homePage_desktops_title)

        cy.get(this.homePage_cart).should('contain.text',0)

    }

    
}

module.exports = new homePage();