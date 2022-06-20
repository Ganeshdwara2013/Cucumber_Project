Feature: Checking the Hotel Booking Functionality of an Adactin Application
@LoginTest
Scenario Outline: Login Functionality
Given user Must Launch The URL
When user Must Declare The Wait Time
And user Enter The "<username>" In The Username Field
And user Enter The "<password>" In The Password Field
Then user Click The Login Button And It Navigates To The Search Hotel Page

Examples:
|username|password|
|abc|123|
|xyz|456|
|ganeshdwara|April@2022|


@HotelSelectionTest
Scenario: Hotel Selection Functionality
Given user Must Moved To The Hotel Selection Page
When user Must Select The Location
And user Must Select the Hotel Name
And user Must Select the Roomtype
And user Must Select the RoomNos
And user Must Enter the CheckInDate in CheckInDate Field
And user Must Enter the CheckOutDate in CheckOutDate Field
And user Must Select the AdultRoom
And user Must Select the ChildRoom
Then user Click The Submit Button And It Navigates To The RadioButton Page

@RadioButtonTest
Scenario: Selecting RadioButton Functionality
Given user Must Moved To The Radiobutton Selection Page
When user Must Click The Radio Button
Then user Click The Continue Button and It Navigates To Details Page

@DetailsTest
Scenario: To Enter the Details of the User Functionality
Given user Must Went To The Details Page 
When user Needs To Scroll To View The First Name Field
And user Needs To Enter The First Name
And user Needs To Enter The Last Name
And user Needs To Enter The Address
And user Needs To Enter The CCNumber
And user Needs To Enter The CCType
And user Needs To Enter The Ccexpmonth
And user Needs To Enter The Ccexpyear
And user Needs To Enter The Cvv
Then user Click the BookNow Button and It Navigates To LogOut Page

@LogoutTest
Scenario: To Click the Logout Functionality
Given user Must Went To The LogOut Page
When user Must Take The Screenshot Of Booking Page
And user Must Scroll The LogOut Button
Then user Must Click The Logout Button

