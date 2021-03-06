class cartPage{

    cartPage_gotoCart ='.ico-cart > .cart-label'
    cartPage_verifyUrl_content = 'cart'
    cartPage_verifyAmount = '.qty-input' 
    cartPage_verifyPrice = '.product-price > strong'
    cartPage_expectedPrice = 1630.00
    cartPage_couponCode = '.discount-coupon-code'
    cartPage_applyCoupon = '.coupon-box > .coupon-code > .button-2'
    cartPage_warningMessage = '.message'

    gotoCart() {
        cy.get(this.cartPage_gotoCart).click()
    }

    verifyUrlCart(){
        cy.url().should('contain',this.cartPage_verifyUrl_content)
    }

    verifyCartAmount(){
        cy.get(this.cartPage_verifyAmount).should('contain.value',2)
    }

    verifyPrice(){
        cy.get(this.cartPage_verifyPrice).should('contain.text',this.cartPage_expectedPrice)
    }
  
    typeCouponCode(){
        cy.get(this.cartPage_couponCode).type('CHEAPCOMPUTERBEST')
    }
    clickOnApplyCoupon(){
        cy.get(this.cartPage_applyCoupon).click()
    }
    verifyWarningMessage(){
        cy.get(this.cartPage_warningMessage).
        should('contain.text',"The coupon code you entered couldn't be applied to your order")

    }

}

module.exports = new cartPage();