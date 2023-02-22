import { loginPage_class } from "../Pages/LoginPage.cy"
import { header_class } from "../Pages/Header.cy"
// import testData from "../../fixtures/testData.json"
const header = new header_class()
const loginPage = new loginPage_class()

let fixtureData;
before( () => {
    cy.fixture('testData').then((data) => {
        fixtureData=data
    })
})

beforeEach( () => {
    header.navigate_to_login_page()
})

describe('InvalidLoginScenario', () => {
    it('invalidLogin', () => {
        fixtureData.login.forEach((login) => {
            loginPage.login(login.LoginEmail,login.LoginPassword)
            loginPage.validate_login(login.message)
            loginPage.clear_fields()
        });
        })
    })

