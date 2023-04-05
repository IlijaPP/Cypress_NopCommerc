export class header_class {
    HomePage = "//a[@href='/']"
    Register = "//a[@class='ico-register']"
    LogIn = "//a[@class='ico-login']"
    WishLis = "//span[@class='wishlist-label']"
    ShoppingCart = "//span[@class='cart-label']"
    SearchBar = "//*[@id='small-searchterms']"
    SearchButton = "//button[@class='button-1 search-box-button']"
    Categories = "//div[contains(@class,'menu-toggle')]"
    Computers = "//ul[contains(@class,'notmobile')]//a[text()='Computers ']"
    Desktops = "//div[@class='item-grid']//a[text()=' Desktops ']"
    Notebooks = "//div[@class='item-grid']//a[text()=' Notebooks ']"
    Software = "//div[@class='item-grid']//a[text()=' Software ']"
    Electronics = "//a[@href='/electronics']"
    Camera_Photo = "//a[@href='/camera-photo']"
    CellPhones = "//a[@href='/cell-phones']"
    Apparel = "//a[@href='/apparel']"
    ShoesMen = "//a[@href='/shoes']"
    ClothingMen = "//a[@href='/clothing']"
    AccessoriesMenu = "//a[@href='/accessories']"
    DigitalDownloads = "//a[@href='/digital-downloads']"
    BooksTab = "//a[@href='/books']"
    JewelryTab = "//a[@href='/jewelry']"
    GiftCardsTa = "//a[@href='/gift-cards']"


    navigate_to_login_page() {
        cy.xpath(this.LogIn).click()
        cy.title().should('eq','nopCommerce demo store. Login')
    }

    navigate_to_register_page() {
        cy.xpath(this.Register).click()
        cy.title().should('eq','nopCommerce demo store. Register')
    }

    navigate_to_desktops() {
        cy.xpath(this.Computers)
        .then($Computers => {
        if ($Computers.is(':visible')) {
            cy.xpath(this.Computers).click()
        } 
        else{
            cy.xpath(this.Categories).click()
            cy.xpath(this.Computers).click()

        }
    })
        cy.xpath(this.Notebooks).should('be.visible')
        cy.xpath(this.Software).should('be.visible')
        cy.xpath(this.Desktops).should('be.visible').click()

    }
    

}

