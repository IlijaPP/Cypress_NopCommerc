import { register_class } from "../Pages/Register_Page.cy";
import { header_class } from "../Pages/Header.cy";
// import { data } from "cypress/types/jquery";

const header = new header_class()
const registerPage = new register_class()

let fixtureData;
before( () => {
    cy.fixture('testData').then((data) => {
        fixtureData=data
    })

})

beforeEach( () => {
    header.navigate_to_register_page()
})

describe('Register Tests', () => {
    it("Register with valid data", () => {
        let randomEmail = (Math.random() + 1).toString(36).substring(2);
        registerPage.register_User(
            fixtureData.FirstName,
            fixtureData.LastName,
            30,
            "July",
            10,
            randomEmail+"@testgmail.com",
            fixtureData.ValidPassword,
            fixtureData.ValidPassword
        )
        registerPage.validate_user_is_registered(fixtureData.SuccessfullRegistrationText)
        cy.readFile("cypress/fixtures/testData.json", (err, data) => {
            if (err) {
                return console.error(err);
            };
        }).then((data) => {
            data.ValidLogInEmail = randomEmail+"@testgmail.com"
            data.login[1].LoginEmail = randomEmail+"@testgmail.com"
            cy.writeFile("cypress/fixtures/testData.json", JSON.stringify(data))
            console.log(data.ValidLogInEmail)
        })
    })
})