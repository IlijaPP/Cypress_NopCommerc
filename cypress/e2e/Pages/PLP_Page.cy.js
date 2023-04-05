export class plp_class {
    ItemList = "//div[@class='item-grid']"
    Intel_i5 = "//*[@id='attribute-option-6']"
    RAM_8GB = "//*[@id='attribute-option-9']"
    CommonProductL = "//div[@class='product-item']"
    SortBy = "//*[@id='products-orderby']"
    ProductPri = "//span[@class='price actual-price']"
    HTC_One_M8 = "//a[@title='Show details for HTC One M8 Android L 5.0 Lollipop']"
    Nokia_Lumia = "//a[@title='Show details for Nokia Lumia 1020']"
    Build_PC = "//div[@class='item-grid']//div[@class='picture']//a[@href='/build-your-own-computer']"
    AddToWish_FirstPrizePies = "(//button[@class='button-2 add-to-wishlist-button'])[2]"
    GoToWishList = "(//a[@href= [hlist'])[1]"
    Jeans_511 = "[@href='/levis-511-jeans'])[1]"


build_your_own_PC(title) {
    cy.xpath(this.Build_PC).should('be.visible')
    cy.xpath(this.Build_PC).click()
    cy.title().should('contain',title)
}

}