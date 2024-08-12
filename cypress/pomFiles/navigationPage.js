class NavigationPage {
    navigateToMyAccount() {
        cy.contains("My account").click();
      }
    
      navigateToShop() {
        cy.contains('Shop').click();
      }
    
      navigateToCart() {
        cy.contains('Cart').click();
      }
    
      navigateToHome() {
        cy.contains('Home').click();
      }

      navigateToCheckout() {
        cy.get('.cart-contents').trigger('mouseover')
        cy.get('.checkout').click({ force: true })
      }
}

export default NavigationPage;