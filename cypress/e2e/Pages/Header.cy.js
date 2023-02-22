export class header_class {
    HomePage = "//a[@href='/']"
    Register = "//a[@class='ico-register']"
    LogIn = "//a[@class='ico-login']"
    WishLis = "//span[@class='wishlist-label']"
    ShoppingCart = "//span[@class='cart-label']"
    SearchBar = "//*[@id='small-searchterms']"
    SearchButton = "//button[@class='button-1 search-box-button']"
    ComputersTa = "//a[@href='/computers']"
    DesktopsMen = "//a[@href='/desktops']"
    NotebooksMen = "//a[@href='/notebooks']"
    SoftwareMen = "//a[@href='/software']"
    ElectronicsTa = "//a[@href='/electronics']"
    Camera_PhotoMen = "//a[@href='/camera-photo']"
    CellPhonesMen = "//a[@href='/cell-phones']"
    ApparelTa = "//a[@href='/apparel']"
    ShoesMen = "//a[@href='/shoes']"
    ClothingMen = "//a[@href='/clothing']"
    AccessoriesMenu = "//a[@href='/accessories']"
    DigitalDownloadsTa = "//a[@href='/digital-downloads']"
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

    

}

