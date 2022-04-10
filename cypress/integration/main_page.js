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


})