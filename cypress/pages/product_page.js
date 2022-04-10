class productPage{

    productPage_product = ':nth-child(1) > .product-item > .picture > a > img'

    clickOnProduct(){

        cy.get(this.productPage_product).click()

    
    }


}

module.exports = new productPage();

   

  