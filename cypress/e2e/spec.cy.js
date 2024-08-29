import AccountPage from "../pomFiles/accountPage" 
import CartPage from "../pomFiles/cartPage"
import CheckoutPage from "../pomFiles/checkoutPage"
import NavigationPage from "../pomFiles/navigationPage"
import ShopPage from "../pomFiles/shopPage"

const navigationPage = new NavigationPage();
const accountPage = new AccountPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const shopPage = new ShopPage();

describe('Edgewords Training Recreation', () => {

  beforeEach(() => {
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/')
    navigationPage.navigateToMyAccount();
    accountPage.loginToMyAccount("fakelewis1@2i.com", "fakepassword@@@@1112");
    navigationPage.navigateToHome();
  })
  it('Buy something and apply a coupon', () => {
    navigationPage.navigateToShop();
    shopPage.selectItem('Beanie');
    shopPage.addItemToCart();
    navigationPage.navigateToCart();
    cartPage.applyCoupon('edgewords');
    cartPage.assertCouponApplied();
  })
  it('Buy something and order it via the checkout', () => {
    navigationPage.navigateToShop();
    shopPage.selectItem('Beanie');
    shopPage.addItemToCart();
    navigationPage.navigateToCheckout();
    checkoutPage.enterCheckoutInformation('Ray', 'Blanc', '2Oui', 'France', '9 Pourier Avinoue', '75008', 'Yamsville', '123456789', 'fakelewis1@2i.com');
    checkoutPage.placeOrder()
    checkoutPage.assertOrderIsPlaced();
  })
})


