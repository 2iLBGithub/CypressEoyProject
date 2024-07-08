describe('Edgewords Training Recreation', () => {
  beforeEach(() => {
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/')
    cy.contains("My account").click();
    cy.get('#username').type('fakelewis1@2i.com')
    cy.get('#password').type('fakepassword@@@@1112')
    cy.contains('Log in').click()
    cy.contains('Home').click() 
  })
  it('Buy something and apply a coupon', () => {
    cy.contains('Shop').click()
    cy.contains('Beanie').click({ force: true })
    cy.get('.single_add_to_cart_button').click()
    cy.contains('Cart').click()
    cy.get('#coupon_code').type('edgewords')
    cy.contains('Apply coupon').click()
    cy.contains('Coupon: edgewords').should('exist');
  })
  it('Buy something and order it via the checkout', () => {
    cy.contains('Shop').click()
    cy.contains('Beanie').click({ force: true })
    cy.get('.single_add_to_cart_button').click()
    cy.get('.cart-contents').trigger('mouseover')
    cy.get('.checkout').click({ force: true })
    cy.get('#billing_first_name').clear().type('Ray')
    cy.get('#billing_last_name').clear().type('Blanc')
    cy.get('#billing_company').clear().type('2Oui')
    cy.get('#select2-billing_country-container').contains('France').click()
    cy.get('#billing_first_name').click();
    cy.get('#billing_address_1').clear().type('9 Pourier Avinoue')
    cy.get('#billing_postcode').clear().type('75008')
    cy.get('#billing_city').clear().type('Yamsville')
    cy.get('#billing_phone').clear().type('123456789')
    cy.get('#billing_email').clear().type('fakelewis1@2i.com')
    cy.get('#place_order').click()
    cy.contains('Order received').should('exist');
  })
})

