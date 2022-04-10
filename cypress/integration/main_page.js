/// <reference types = "cypress"/>

import homePage from '../pages/home_page'
import productPage from '../pages/product_page'
import productDetailPage from '../pages/product_detail'
import cartPage from '../pages/cart_page'


beforeEach(function(){
    
    homePage.navigate('http://demowebshop.tricentis.com/')

})


it('Rapsodo Assignment', ()=> {
    
    //Home Page Operations

    homePage.verifyUrl('http://demowebshop.tricentis.com/')
    homePage.clickOnComputers()
    homePage.clickOnDesktop()
    homePage.verifyTitleAndCart()
 
    // Products Page Operations

    productPage.clickOnProduct()

    // Product Detail Page Operations

    productDetailPage.verifyUrlContent()
    productDetailPage.selectAmountProduct()
    productDetailPage.addItemsToCart()

    //Cart Page Operations

    cartPage.gotoCart()
    cartPage.verifyPrice()
    cartPage.typeCouponCode()
    cartPage.clickOnApplyCoupon()
    cartPage.verifyWarningMessage()

    //cy.get('.ico-cart > .cart-label').click()

    // Verifying the cost data
    //cy.get('.product-price > strong').should('contain.text',1630.00)

    // Appliying the coupon on  discount code
    //cy.get('.discount-coupon-code').type('CHEAPCOMPUTERBEST')
    // Click apply
    //cy.get('.coupon-box > .coupon-code > .button-2').click()

    // Verify the does not exist
   // cy.get('.message').should('contain.text',"The coupon code you entered couldn't be applied to your order")
    

    

   

})