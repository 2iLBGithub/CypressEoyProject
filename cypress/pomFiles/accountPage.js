class AccountPage {
    loginToMyAccount(username, password) {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.contains('Log in').click();
    }
  }
  
  export default AccountPage;
  