// import { should } from "chai"

export class pdp_class {
    ProductName = "//div[@class='product-name']"
    CompareButton = "(//button[@class='button-2 add-to-compare-list-button'])[1]"
    NotificationBar = "//div[contains(@class,'bar-notification')]//p[@class='content']"
    Compare_Link = "(//a[@href='/compareproducts'])[1]"
    DisplayedProductNumber = "//*[@id='products-pagesize']"
    BuildPC_SelectRam = "//*[@id='product_attribute_2']"
    BuildPC_SelectSoftware_Office = "//*[@id='product_attribute_5_10']"
    BuildPC_SelectSoftware_AcrobatReader = "//*[@id='product_attribute_5_11']"
    BuildPC_SelectSoftware_TotalCommander = "//*[@id='product_attribute_5_12']"
    AddToCartButton = "//button[@class='button-1 add-to-cart-button']"
    radioButtons = "//input[@type='radio']"
    checkBox = "//input[@type='checkbox']"

    build_PC(ramSize, hddSize, vistaVersion,softwareSelected,software) {
        cy.xpath(this.BuildPC_SelectRam).select(ramSize).should('have.value',ramSize)
        cy.xpath(this.radioButtons).check(hddSize).should('be.checked')
        cy.xpath(this.radioButtons).check(vistaVersion).should('be.checked')
        cy.xpath(this.checkBox).uncheck(softwareSelected).should('not.be.checked')
        cy.xpath(this.checkBox).check(software).should('be.checked')
        cy.xpath("//select[@name='product_attribute_1']").invoke('text').then( (procesor => {
            let cyReturn = {};
            cyReturn.procesor = procesor;
            cy.xpath("//select[@name='product_attribute_2']").invoke('text').then((hddSizeText => {
                cyReturn.hddSizeText = hddSizeText;
                cy.xpath("//label[@for='product_attribute_3_7']").invoke('text').then((ramSizeText => {
                    cyReturn.ramSizeText = ramSizeText;
                    cy.log("sad " + cyReturn)
                    return cyReturn;     
                }));
            }));
        }));  
          
        

    }

    add_item_to_cart (notificationMessage) {
        cy.xpath(this.AddToCartButton).should('be.enabled').click()
        cy.xpath(this.NotificationBar).should('contain.text',notificationMessage)
    }

    

}


