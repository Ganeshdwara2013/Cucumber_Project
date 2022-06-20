$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Karthik/eclipse-workspace/Cucumber_Project/src/test/java/com/features/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Checking the Hotel Booking Functionality of an Adactin Application",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-of-an-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login Functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-of-an-adactin-application;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Must Launch The URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Must Declare The Wait Time",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cusername\u003e\" In The Username Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cpassword\u003e\" In The Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-of-an-adactin-application;login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "checking-the-hotel-booking-functionality-of-an-adactin-application;login-functionality;;1"
    },
    {
      "cells": [
        "abc",
        "123"
      ],
      "line": 12,
      "id": "checking-the-hotel-booking-functionality-of-an-adactin-application;login-functionality;;2"
    },
    {
      "cells": [
        "xyz",
        "456"
      ],
      "line": 13,
      "id": "checking-the-hotel-booking-functionality-of-an-adactin-application;login-functionality;;3"
    },
    {
      "cells": [
        "ganeshdwara",
        "April@2022"
      ],
      "line": 14,
      "id": "checking-the-hotel-booking-functionality-of-an-adactin-application;login-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 35930700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login Functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-of-an-adactin-application;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Must Launch The URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Must Declare The Wait Time",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"abc\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"123\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Launch_The_URL()"
});
formatter.result({
  "duration": 2460021200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Declare_The_Wait_Time()"
});
formatter.result({
  "duration": 29668600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 794523400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 754690500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 678695300,
  "status": "passed"
});
formatter.after({
  "duration": 1070600,
  "status": "passed"
});
formatter.before({
  "duration": 280100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-of-an-adactin-application;login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Must Launch The URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Must Declare The Wait Time",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"xyz\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"456\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Launch_The_URL()"
});
formatter.result({
  "duration": 476316800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Declare_The_Wait_Time()"
});
formatter.result({
  "duration": 11749700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 329181800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 280633100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 607906600,
  "status": "passed"
});
formatter.after({
  "duration": 251200,
  "status": "passed"
});
formatter.before({
  "duration": 258500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-of-an-adactin-application;login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Must Launch The URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Must Declare The Wait Time",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"ganeshdwara\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"April@2022\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Launch_The_URL()"
});
formatter.result({
  "duration": 852965400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Declare_The_Wait_Time()"
});
formatter.result({
  "duration": 60906600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ganeshdwara",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 748295400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April@2022",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 460933300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1885126300,
  "status": "passed"
});
formatter.after({
  "duration": 395700,
  "status": "passed"
});
formatter.before({
  "duration": 298900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Hotel Selection Functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-of-an-adactin-application;hotel-selection-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@HotelSelectionTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user Must Moved To The Hotel Selection Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user Must Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user Must Select the Hotel Name",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Must Select the Roomtype",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Must Select the RoomNos",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Must Enter the CheckInDate in CheckInDate Field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Must Enter the CheckOutDate in CheckOutDate Field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Must Select the AdultRoom",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Must Select the ChildRoom",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Click The Submit Button And It Navigates To The RadioButton Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Moved_To_The_Hotel_Selection_Page()"
});
formatter.result({
  "duration": 243200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Select_The_Location()"
});
formatter.result({
  "duration": 1041451900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Select_the_Hotel_Name()"
});
formatter.result({
  "duration": 575347000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Select_the_Roomtype()"
});
formatter.result({
  "duration": 647743600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Select_the_RoomNos()"
});
formatter.result({
  "duration": 770957500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Enter_the_CheckInDate_in_CheckInDate_Field()"
});
formatter.result({
  "duration": 722611400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Enter_the_CheckOutDate_in_CheckOutDate_Field()"
});
formatter.result({
  "duration": 741898800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Select_the_AdultRoom()"
});
formatter.result({
  "duration": 776995000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Select_the_ChildRoom()"
});
formatter.result({
  "duration": 725335500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Submit_Button_And_It_Navigates_To_The_RadioButton_Page()"
});
formatter.result({
  "duration": 2253498500,
  "status": "passed"
});
formatter.after({
  "duration": 439800,
  "status": "passed"
});
formatter.before({
  "duration": 925000,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Selecting RadioButton Functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-of-an-adactin-application;selecting-radiobutton-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@RadioButtonTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user Must Moved To The Radiobutton Selection Page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user Must Click The Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user Click The Continue Button and It Navigates To Details Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Moved_To_The_Radiobutton_Selection_Page()"
});
formatter.result({
  "duration": 347400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Click_The_Radio_Button()"
});
formatter.result({
  "duration": 362397600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Click_the_Continue_Button()"
});
formatter.result({
  "duration": 1466393500,
  "status": "passed"
});
formatter.after({
  "duration": 217700,
  "status": "passed"
});
formatter.before({
  "duration": 251500,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "To Enter the Details of the User Functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-of-an-adactin-application;to-enter-the-details-of-the-user-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@DetailsTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "user Must Went To The Details Page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user Needs To Scroll To View The First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user Needs To Enter The First Name",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Needs To Enter The Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Needs To Enter The Address",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Needs To Enter The CCNumber",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user Needs To Enter The CCType",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user Needs To Enter The Ccexpmonth",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user Needs To Enter The Ccexpyear",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user Needs To Enter The Cvv",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user Click the BookNow Button and It Navigates To LogOut Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Went_To_The_Details_Page()"
});
formatter.result({
  "duration": 225700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Needs_To_Scroll_To_View_The_First_Name_Field()"
});
formatter.result({
  "duration": 238722000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Needs_To_Enter_The_First_Name()"
});
formatter.result({
  "duration": 605975300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Needs_To_Enter_The_Last_Name()"
});
formatter.result({
  "duration": 413334500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Needs_To_Enter_The_Address()"
});
formatter.result({
  "duration": 633487300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Needs_To_Enter_The_CCNumber()"
});
formatter.result({
  "duration": 421002800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Needs_To_Enter_The_CCType()"
});
formatter.result({
  "duration": 551066200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Needs_To_Enter_The_Ccexpmonth()"
});
formatter.result({
  "duration": 704962300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Needs_To_Enter_The_Ccexpyear()"
});
formatter.result({
  "duration": 851792100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Needs_To_Enter_The_Cvv()"
});
formatter.result({
  "duration": 315076900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_the_BookNow_Button_and_It_Navigates_To_LogOut_Page()"
});
formatter.result({
  "duration": 319566200,
  "status": "passed"
});
formatter.after({
  "duration": 263100,
  "status": "passed"
});
formatter.before({
  "duration": 238900,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "To Click the Logout Functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-of-an-adactin-application;to-click-the-logout-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@LogoutTest"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "user Must Went To The LogOut Page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "user Must Take The Screenshot Of Booking Page",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user Must Scroll The LogOut Button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user Must Click The Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Went_To_The_LogOut_Page()"
});
formatter.result({
  "duration": 388100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Take_The_Screenshot_Of_Booking_Page()"
});
formatter.result({
  "duration": 2497525000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Scroll_The_LogOut_Button()"
});
formatter.result({
  "duration": 3648863800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Must_Click_The_Logout_Button()"
});
formatter.result({
  "duration": 586527100,
  "status": "passed"
});
formatter.after({
  "duration": 265300,
  "status": "passed"
});
});