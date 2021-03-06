package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductPage extends Utility {

    private static final Logger log= LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    //    @FindBy(xpath = "//a[normalize-space()='Faded Short Sleeve T-shirts']")
//    //a[normalize-space()='Blouse'
//
    @FindBy(css = "#quantity_wanted")
    WebElement inputboxQt;

    @FindBy(css = "#group_1")
    WebElement selectSizeDropDown;

    @FindBy(css = "button[name='Submit'] span")
    WebElement addToCartButton;

    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement verifyTEXT;

    @FindBy(xpath = "//span[@title='Close window']")
    WebElement close;

    @FindBy(xpath = "//a[normalize-space()='Blouse']")   //a[normalize-space()='Blouse']
    WebElement blouse;

    @FindBy(xpath = "//a[@id='color_8']")   //a[@id='color_8']
    WebElement colorWht;

    @FindBy(xpath = "(//a[@title='Printed Dress'][normalize-space()='Printed Dress'])[1]")
    WebElement printedDress;

    @FindBy(xpath = "//a[@id='color_13']")   //a[@id='color_13']
    WebElement colorOrg;

    @FindBy(xpath = "//a[normalize-space()='Printed Chiffon Dress']")
    WebElement priChiDress;

    @FindBy(xpath = "//a[@id='color_15']")  //a[@id='color_15']
    WebElement colorGrn;

    @FindBy(xpath = "(//a[@title='Printed Summer Dress'][normalize-space()='Printed Summer Dress'])[2]")
    WebElement summerDress;

    @FindBy(xpath = "//a[@id='color_14']") //a[@id='color_14']
    WebElement colorBlu;


    public void selectedProduct(String Name) {
        if (Name.equalsIgnoreCase("Blouse")) {
            clickOnElement(blouse);
            log.info("clicking on blouse button: " + blouse.toString());
        } else if (Name.equalsIgnoreCase("Printed Dress")) {
            clickOnElement(printedDress);
            log.info("clicking on printed dress button: " + priChiDress.toString());
        } else if (Name.equalsIgnoreCase("Printed Chiffon Dress")) {
            clickOnElement(priChiDress);
            log.info("clicking on printed chiffon button: " + priChiDress.toString());
        } else if (Name.equalsIgnoreCase("Printed Summer Dress with Price $28.98")) {
            clickOnElement(summerDress);
            log.info("clicking on summer dress button: " + summerDress.toString());
        }
    }

    public void selColour(String color) {
        if (color.equalsIgnoreCase("White")) {
            clickOnElement(colorWht);
            log.info("clicking on white colour : " + colorWht.toString());
        } else if (color.equalsIgnoreCase("Orange")) {
            clickOnElement(colorOrg);
            log.info("clicking on orange color: " + colorOrg.toString());
        } else if (color.equalsIgnoreCase("Green")) {
            clickOnElement(colorGrn);
            log.info("clicking on Green color: " + colorGrn.toString());
        } else if (color.equalsIgnoreCase("Blue")) {
            clickOnElement(colorBlu);
            log.info("clicking on Blue color: " + colorBlu.toString());
        }
    }

    public void enterQuantity(String value) throws InterruptedException {
        //  Reporter.log("Entering qty :" +value+ " in the qtyAdd :" +inputboxQt.toString() + "<br>");
        clearValue(inputboxQt);
        log.info("clearing value in quantity field : " + inputboxQt.toString());
        Thread.sleep(1000);
        sendTextToElement(inputboxQt, value);
        log.info("Input quantity : " + inputboxQt.toString());
        System.out.println("");
    }

    public void selectYourComfortSize(String size) {
        selectByVisibleTextFromDropDown(selectSizeDropDown, size);
        log.info("Selecting size: " + selectSizeDropDown.toString());
    }

    public void clickOnAddToCartButton() {
        clickOnElement(addToCartButton);
        log.info("Clicking on add to cart button: " + addToCartButton.toString());
    }

    public void verifyTextForSuccessfullyadd(String msg) {
        verifyMessage(verifyTEXT, msg, "Product successfully added to your shopping cart");
    }

    public void clickToClose() {
        clickOnElement(close);
        log.info("clicking on close button: " + close.toString());
    }

}

