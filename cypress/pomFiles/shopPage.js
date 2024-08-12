class ShopPage {
    selectItem(itemName) {
      cy.contains(itemName).click({ force: true });
    }
  
    addItemToCart() {
      cy.get('.single_add_to_cart_button').click();
    }
  }
  
  export default ShopPage;
  