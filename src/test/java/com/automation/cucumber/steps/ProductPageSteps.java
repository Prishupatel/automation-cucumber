package com.automation.cucumber.steps;

import com.automation.pages.ProductPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class ProductPageSteps {

    @And("^I select one \"([^\"]*)\"$")
    public void iSelectOne(String name) {
        new ProductPage().selectedProduct(name);

    }

    @And("^I enter quantity \"([^\"]*)\"$")
    public void iEnterQuantity(String qty) throws InterruptedException {
       new ProductPage().enterQuantity(qty);
    }

    @And("^I select size \"([^\"]*)\"$")
    public void iSelectSize(String size)  {
        new ProductPage().selectYourComfortSize(size);
    }

    @And("^I select color \"([^\"]*)\"$")
    public void iSelectColor(String clr)  {
       new ProductPage().selColour(clr);
    }

    @And("^I click on add to cart$")
    public void iClickOnAddToCart() {
        new ProductPage().clickOnAddToCartButton();
    }

    @Then("^I close popup$")
    public void iClosePopup() {
        new ProductPage().clickToClose();
    }
}
