class productDetailPage{

    productDetailPage_currentUrl = 'build-your-cheap-own-computer'
    productDetailPage_addItems = '#addtocart_72_EnteredQuantity'
    productDetailPage_gotoCart = '#add-to-cart-button-72'



    verifyUrlContent(){

        cy.url().should('contain',this.productDetailPage_currentUrl)
    }

    selectAmountProduct() {

        cy.get(this.productDetailPage_addItems).type('{selectall}{backspace}2')
    }

    addItemsToCart(){

        cy.get(this.productDetailPage_gotoCart).click()

    }

    

    


    

}

module.exports = new productDetailPage();