class CheckoutPage {
    enterCheckoutInformation(firstName, lastName, companyName, billingCountry, addressOne, postCode, cityName, phoneNumber, emailAddress) {
        cy.get('#billing_first_name').clear().type(firstName)
        cy.get('#billing_last_name').clear().type(lastName)
        cy.get('#billing_company').clear().type(companyName)
        cy.get('#select2-billing_country-container').contains(billingCountry).click()
        cy.get('#billing_first_name').click();
        cy.get('#billing_address_1').clear().type(addressOne)
        cy.get('#billing_postcode').clear().type(postCode)
        cy.get('#billing_city').clear().type(cityName)
        cy.get('#billing_phone').clear().type(phoneNumber)
        cy.get('#billing_email').clear().type(emailAddress)
    }

    placeOrder() {
        cy.get('#place_order').click()
    }

    assertOrderIsPlaced() {
        cy.contains('Order received').should('exist');
    }
}

export default CheckoutPage;