package com.automation.cucumber.steps;

import com.automation.pages.HomePage;
import cucumber.api.java.en.When;

public class HomePageSteps {
    @When("^I click on women tab$")
    public void iClickOnWomenTab() {
        new HomePage().clickonWomenButtonOnHomePage();
    }
}
