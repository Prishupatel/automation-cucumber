$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signIn.feature");
formatter.feature({
  "line": 1,
  "name": "SignIn Page",
  "description": "As a user I should navigate to sign in page successful",
  "id": "signin-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-page;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message\"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "signin-page;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 18,
      "id": "signin-page;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 19,
      "id": "signin-page;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 20,
      "id": "signin-page;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 21,
      "id": "signin-page;verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 22,
      "id": "signin-page;verify-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6210975300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-page;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message\"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 157199301,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1371117300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 116216500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 153542401,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 703711300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 31
    }
  ],
  "location": "SignInSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 43474400,
  "status": "passed"
});
formatter.after({
  "duration": 829702700,
  "status": "passed"
});
formatter.before({
  "duration": 3489544701,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-page;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message\"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 26101,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3970877601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 201560201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 123100599,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 1115500700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 31
    }
  ],
  "location": "SignInSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 32534200,
  "status": "passed"
});
formatter.after({
  "duration": 1265557200,
  "status": "passed"
});
formatter.before({
  "duration": 3681436600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-page;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message\"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 56000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2523232399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 147963100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 187544000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 1525376200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 31
    }
  ],
  "location": "SignInSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 43473100,
  "status": "passed"
});
formatter.after({
  "duration": 1309394299,
  "status": "passed"
});
formatter.before({
  "duration": 4355888900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-page;verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message\"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 31799,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2802101800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 184937999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 169013799,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 1972911199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 31
    }
  ],
  "location": "SignInSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 37749301,
  "status": "passed"
});
formatter.after({
  "duration": 1312427300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Verify user should login successfully with valid credentials",
  "description": "",
  "id": "signin-page;verify-user-should-login-successfully-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter password \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I can see signout link",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "signin-page;verify-user-should-login-successfully-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "pass"
      ],
      "line": 34,
      "id": "signin-page;verify-user-should-login-successfully-with-valid-credentials;;1"
    },
    {
      "cells": [
        "primetest123@gmail.com",
        "123456"
      ],
      "line": 35,
      "id": "signin-page;verify-user-should-login-successfully-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3347581201,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify user should login successfully with valid credentials",
  "description": "",
  "id": "signin-page;verify-user-should-login-successfully-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter username \"primetest123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I can see signout link",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 21500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1496302500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "primetest123@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 172406600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 134468201,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 21614763900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iCanSeeSignoutLink()"
});
formatter.result({
  "duration": 56268201,
  "status": "passed"
});
formatter.after({
  "duration": 804359000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Verify user should Logout successfully",
  "description": "",
  "id": "signin-page;verify-user-should-logout-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter password \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on signout button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I can see sign in link again",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "signin-page;verify-user-should-logout-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "pass"
      ],
      "line": 48,
      "id": "signin-page;verify-user-should-logout-successfully;;1"
    },
    {
      "cells": [
        "primetest123@gmail.com",
        "123456"
      ],
      "line": 49,
      "id": "signin-page;verify-user-should-logout-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4200830799,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Verify user should Logout successfully",
  "description": "",
  "id": "signin-page;verify-user-should-logout-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I enter username \"primetest123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on signout button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I can see sign in link again",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 28600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2069832100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "primetest123@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 167403100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 143809800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 21411937800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignoutButton()"
});
formatter.result({
  "duration": 6133505600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iCanSeeSignInLinkAgain()"
});
formatter.result({
  "duration": 49091900,
  "status": "passed"
});
formatter.after({
  "duration": 846764700,
  "status": "passed"
});
});