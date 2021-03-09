$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "Login into swiggy website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Positive scenario to test login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has opened Swiggy website on Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters correct \"\u003cphoneno\u003e\" and \"\u003cusername\u003e\" and \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "phoneno",
        "username",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "9768543451",
        "abc",
        "abc@xyz.com",
        "123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Positive scenario to test login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has opened Swiggy website on Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginstepDef.user_has_opened_swiggy_website_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct \"9768543451\" and \"abc\" and \"abc@xyz.com\" and \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginstepDef.user_enters_correct_something_and_something_and_something_and_something(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
});