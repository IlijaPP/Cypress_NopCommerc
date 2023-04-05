import { loginPage_class } from "../Pages/LoginPage.cy"
import { register_class } from "../Pages/Register_Page.cy";
import { header_class } from "../Pages/Header.cy"
import { pdp_class } from "../Pages/PDP_Page.cy"
import { plp_class } from "../Pages/PLP_Page.cy"
import { search_class } from "../Pages/Search.cy"
import { shoppingCart_class } from "../Pages/Shopping_Cart.cy"
import { wishlist_class } from "../Pages/Wish_List.cy"

const loginPage = new loginPage_class()
const header = new header_class()
const registerPage = new register_class()
const pdp = new pdp_class()
const plp = new plp_class()
const search = new search_class()
const shoppingCart = new shoppingCart_class()
const wishlist = new wishlist_class()

let fixtureData;
before( () => {
    cy.fixture('testData').then((data) => {
        fixtureData=data
    })
})

describe('E2E', () => {
    it('Login and purchase item(Build your own computer)', () => {
            header.navigate_to_login_page()
            loginPage.login(fixtureData.ValidLogInEmail,fixtureData.ValidPassword)
            loginPage.validate_login(fixtureData.SuccessfulLogInText)
            header.navigate_to_desktops()
            plp.build_your_own_PC(fixtureData.BuildPC_TITLE)
            var setupPC = pdp.build_PC(fixtureData.Ram8GB,
                fixtureData.HDD400GB,
                fixtureData.vistaPremium,
                fixtureData.Office)
            pdp.add_item_to_cart(fixtureData.AddedProductInCart)
            // pdp.log_in_console(setupPC)
        });
    })

    // cy.get('@productLocator').find('.product').each((el, index, list) => {
 
    //     const textVeg=el.find('h4.product-name').text()


    //     describe("homework - day 3", () => {
    //         beforeEach(() => {
    //             cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //         });
        
    //         it('Auto Complete', () => {
    //             cy.get('#autocomplete').type('braz')
    //             cy.get('.ui-menu-item div').then((el) => {
    //                 const name = el.text()
    //                 expect(name).to.have.string('Brazil')
    //                 cy.wrap(el).click()
        
    //             })
    //         });
        
    //         it('Open Tab', () => {
    //             cy.get('#opentab').as("tab")
    //             cy.url().should((link)
    //      => {
    //                 expect(link).to.eq('https://rahulshettyacademy.com/AutomationPractice/')
    //             }).then(() => {
    //                 cy.get('@tab').invoke('attr', 'target', '_self').click()
        
    //             }).then(() => {
    //                 cy.url().should((link2) => {
    //                     expect(link2).to.eq('https://www.rahulshettyacademy.com/')
        
    //                 })
    //             })
        
    //         });
        