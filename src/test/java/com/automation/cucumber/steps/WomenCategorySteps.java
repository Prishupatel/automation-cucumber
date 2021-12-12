package com.automation.cucumber.steps;

import com.automation.pages.WomenCategoryPage;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class WomenCategorySteps {
    @Then("^I can see women category page$")
    public void iCanSeeWomenCategoryPage() {
        Assert.assertEquals("not matched",new WomenCategoryPage().getWomenTitle(),"Women");
    }
}
