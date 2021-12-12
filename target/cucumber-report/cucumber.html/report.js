$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("womenCatagory.feature");
formatter.feature({
  "line": 1,
  "name": "Women category page",
  "description": "As a user i should navigate to women category page and check products",
  "id": "women-category-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select one \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select color \"\u003ccolor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close popup",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "color"
      ],
      "line": 21,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 22,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 23,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 24,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 25,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7048025500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select one \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select color \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 154077300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1514075400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 14
    }
  ],
  "location": "ProductPageSteps.iSelectOne(String)"
});
formatter.result({
  "duration": 22292999400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "ProductPageSteps.iEnterQuantity(String)"
});
formatter.result({
  "duration": 1226260300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "ProductPageSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 175586300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 16
    }
  ],
  "location": "ProductPageSteps.iSelectColor(String)"
});
formatter.result({
  "duration": 92009700,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 86758200,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.iClosePopup()"
});
formatter.result({
  "duration": 968119700,
  "status": "passed"
});
formatter.after({
  "duration": 908912600,
  "status": "passed"
});
formatter.before({
  "duration": 3574111100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select one \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select color \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 32500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1537131800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 14
    }
  ],
  "location": "ProductPageSteps.iSelectOne(String)"
});
formatter.result({
  "duration": 21599289100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "ProductPageSteps.iEnterQuantity(String)"
});
formatter.result({
  "duration": 1222534900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "ProductPageSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 141398600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 16
    }
  ],
  "location": "ProductPageSteps.iSelectColor(String)"
});
formatter.result({
  "duration": 95000500,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 91890000,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.iClosePopup()"
});
formatter.result({
  "duration": 884627700,
  "status": "passed"
});
formatter.after({
  "duration": 903119400,
  "status": "passed"
});
formatter.before({
  "duration": 3437292700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select one \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select color \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 71500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1425150100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 14
    }
  ],
  "location": "ProductPageSteps.iSelectOne(String)"
});
formatter.result({
  "duration": 21024937400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "ProductPageSteps.iEnterQuantity(String)"
});
formatter.result({
  "duration": 1239618500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "ProductPageSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 76026000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 16
    }
  ],
  "location": "ProductPageSteps.iSelectColor(String)"
});
formatter.result({
  "duration": 105366200,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 82067700,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.iClosePopup()"
});
formatter.result({
  "duration": 1336853600,
  "status": "passed"
});
formatter.after({
  "duration": 923552800,
  "status": "passed"
});
formatter.before({
  "duration": 3465899200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select one \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select color \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 67800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1473366800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 14
    }
  ],
  "location": "ProductPageSteps.iSelectOne(String)"
});
formatter.result({
  "duration": 21481626400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "ProductPageSteps.iEnterQuantity(String)"
});
formatter.result({
  "duration": 1215536700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "ProductPageSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 146177600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 16
    }
  ],
  "location": "ProductPageSteps.iSelectColor(String)"
});
formatter.result({
  "duration": 108073500,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 92964300,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.iClosePopup()"
});
formatter.result({
  "duration": 613595100,
  "status": "passed"
});
formatter.after({
  "duration": 866547300,
  "status": "passed"
});
});