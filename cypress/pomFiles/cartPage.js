class CartPage {
    applyCoupon(couponCode) {
        // EDGEWORDS is the coupon
        cy.get('#coupon_code').type(couponCode)
        cy.contains('Apply coupon').click()
    }

    assertCouponApplied() {
        cy.contains('Coupon: edgewords').should('exist');
    }
}

export default CartPage;