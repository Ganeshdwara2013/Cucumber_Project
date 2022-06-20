package com.stepdefinition;

import java.io.IOException;

import com.Cucumber_Project.Baseclass;
import com.page_object_manager.Page_Object_Manager;
import com.properties.File_Reader_Manager;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends Baseclass {
	
	public static Page_Object_Manager pom = new Page_Object_Manager(driver);

	
	@Before // @Before - cucumber.api.java
	public void beforeHooks(Scenario s) { // scenario is a interface, we are retreiving from that, 
		                               // import cucumber(Scenario api)

		String name = s.getName();
		System.out.println("Scenario Name :" + name);
		
	}
	
	@After
	public void afterHooks(Scenario s) throws IOException {

		String status = s.getStatus();
		System.out.println("Scenario Status :" + status);

		if (s.isFailed()) {
			
			screenshotMethod("C:\\Users\\Karthik\\eclipse-workspace\\Cucumber_Project\\CucumberReport");				
		}		
	}
	
	@Given("^user Must Launch The URL$")
	public void user_Must_Launch_The_URL() throws Throwable {

		String url = File_Reader_Manager.getInstanceFRM().getInstanceCR().getUrl();		
		urlLaunch(url);
		
	}
	
	@When("^user Must Declare The Wait Time$")
	public void user_Must_Declare_The_Wait_Time() throws Throwable {

		implicitWaitMethod();
		
	}


	@When("^user Enter The \"([^\"]*)\" In The Username Field$")
	public void user_Enter_The_In_The_Username_Field(String username) throws Throwable {
		
//		String username = File_Reader_Manager.getInstanceFRM().getInstanceCR().getUsername();
		passInput(pom.getInstanceLogin().getUsername(), username);
		
	}

	@When("^user Enter The \"([^\"]*)\" In The Password Field$")
	public void user_Enter_The_In_The_Password_Field(String password) throws Throwable {

//		String password = File_Reader_Manager.getInstanceFRM().getInstanceCR().getPassword();
		passInput(pom.getInstanceLogin().getPassword(), password);
		
	}
	
//	@When("^user Enter The Username In The Username Field$")
//	public void user_Enter_The_Username_In_The_Username_Field() throws Throwable {
//
//		String username = File_Reader_Manager.getInstanceFRM().getInstanceCR().getUsername();
//		passInput(pom.getInstanceLogin().getUsername(), username);
//		
//	}
//
//	@When("^user Enter The Password In The Password Field$")
//	public void user_Enter_The_Password_In_The_Password_Field() throws Throwable {
//
//		String password = File_Reader_Manager.getInstanceFRM().getInstanceCR().getPassword();
//		passInput(pom.getInstanceLogin().getPassword(), password);
//		
//	}

	@Then("^user Click The Login Button And It Navigates To The Search Hotel Page$")
	public void user_Click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page() throws Throwable {

		clickElement(pom.getInstanceLogin().getLogin());
	}
	

	@Given("^user Must Moved To The Hotel Selection Page$")
	public void user_Must_Moved_To_The_Hotel_Selection_Page() throws Throwable {

		System.out.println("Successfully Moved to Hotel Selection Page");
	}

	@When("^user Must Select The Location$")
	public void user_Must_Select_The_Location() throws Throwable {

		dropdownSelectByIndex(pom.getInstanceHotelSelection().getLocation(), 2);
	}

	@When("^user Must Select the Hotel Name$")
	public void user_Must_Select_the_Hotel_Name() throws Throwable {

		dropdownSelectByVisibleText(pom.getInstanceHotelSelection().getHotels(), "Hotel Creek");

	}

	@When("^user Must Select the Roomtype$")
	public void user_Must_Select_the_Roomtype() throws Throwable {

		dropdownSelectByValue(pom.getInstanceHotelSelection().getRoomtype(), "Standard");

	}

	@When("^user Must Select the RoomNos$")
	public void user_Must_Select_the_RoomNos() throws Throwable {

		dropdownSelectByIndex(pom.getInstanceHotelSelection().getRoomnos(), 3);

	}

	@When("^user Must Enter the CheckInDate in CheckInDate Field$")
	public void user_Must_Enter_the_CheckInDate_in_CheckInDate_Field() throws Throwable {

		String checkindate = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCheckindate();
		clearMethod(pom.getInstanceHotelSelection().getCheckindate());		
		passInput(pom.getInstanceHotelSelection().getCheckindate(), checkindate);
		
	}

	@When("^user Must Enter the CheckOutDate in CheckOutDate Field$")
	public void user_Must_Enter_the_CheckOutDate_in_CheckOutDate_Field() throws Throwable {

		String checkoutdate = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCheckoutdate();
		clearMethod(pom.getInstanceHotelSelection().getCheckoutdate());		
		passInput(pom.getInstanceHotelSelection().getCheckoutdate(), checkoutdate);

	}

	@When("^user Must Select the AdultRoom$")
	public void user_Must_Select_the_AdultRoom() throws Throwable {

		dropdownSelectByIndex(pom.getInstanceHotelSelection().getAdultroom(), 3);

	}

	@When("^user Must Select the ChildRoom$")
	public void user_Must_Select_the_ChildRoom() throws Throwable {

		dropdownSelectByIndex(pom.getInstanceHotelSelection().getChildroom(), 1);

	}

	@Then("^user Click The Submit Button And It Navigates To The RadioButton Page$")
	public void user_Click_The_Submit_Button_And_It_Navigates_To_The_RadioButton_Page() throws Throwable {
	
		clickElement(pom.getInstanceHotelSelection().getSubmit());

	}

	@Given("^user Must Moved To The Radiobutton Selection Page$")
	public void user_Must_Moved_To_The_Radiobutton_Selection_Page() throws Throwable {
	
		System.out.println("Successfully Moved to RadioButton Page");
	}

	@When("^user Must Click The Radio Button$")
	public void user_Must_Click_The_Radio_Button() throws Throwable {
	
		clickElement(pom.getInstanceRadioButton().getRadiobutton());
		
	}

	@Then("^user Click The Continue Button and It Navigates To Details Page$")
	public void user_Must_Click_the_Continue_Button() throws Throwable {
	
		clickElement(pom.getInstanceRadioButton().getConti());

	}
	
	@Given("^user Must Went To The Details Page$")
	public void user_Must_Went_To_The_Details_Page() throws Throwable {

		System.out.println("Successfully Moved to Details Page");

	}

	@When("^user Needs To Scroll To View The First Name Field$")
	public void user_Needs_To_Scroll_To_View_The_First_Name_Field() throws Throwable {

		scrollToElement(pom.getInstanceDetails().getFirstname());

	}

	@When("^user Needs To Enter The First Name$")
	public void user_Needs_To_Enter_The_First_Name() throws Throwable {

		String firstname = File_Reader_Manager.getInstanceFRM().getInstanceCR().getFirstname();
		passInput(pom.getInstanceDetails().getFirstname(), firstname);
		
	}

	@When("^user Needs To Enter The Last Name$")
	public void user_Needs_To_Enter_The_Last_Name() throws Throwable {

		String lastname = File_Reader_Manager.getInstanceFRM().getInstanceCR().getLastname();
		passInput(pom.getInstanceDetails().getLastname(), lastname);
		
	}

	@When("^user Needs To Enter The Address$")
	public void user_Needs_To_Enter_The_Address() throws Throwable {

		String address = File_Reader_Manager.getInstanceFRM().getInstanceCR().getAddress();
		passInput(pom.getInstanceDetails().getAddress(), address);
		
	}

	@When("^user Needs To Enter The CCNumber$")
	public void user_Needs_To_Enter_The_CCNumber() throws Throwable {

		String ccnum = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCcnum();
		passInput(pom.getInstanceDetails().getCcnum(), ccnum);
		
	}

	@When("^user Needs To Enter The CCType$")
	public void user_Needs_To_Enter_The_CCType() throws Throwable {

		dropdownSelectByIndex(pom.getInstanceDetails().getCctype(), 3);

	}

	@When("^user Needs To Enter The Ccexpmonth$")
	public void user_Needs_To_Enter_The_Ccexpmonth() throws Throwable {

		dropdownSelectByIndex(pom.getInstanceDetails().getCcexpmonth(), 7);

	}

	@When("^user Needs To Enter The Ccexpyear$")
	public void user_Needs_To_Enter_The_Ccexpyear() throws Throwable {

		dropdownSelectByIndex(pom.getInstanceDetails().getCcexpyear(), 12);

	}

	@When("^user Needs To Enter The Cvv$")
	public void user_Needs_To_Enter_The_Cvv() throws Throwable {

		String cccvv = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCccvv();
		passInput(pom.getInstanceDetails().getCccvv(), cccvv);
	
	}

	@Then("^user Click the BookNow Button and It Navigates To LogOut Page$")
	public void user_Click_the_BookNow_Button_and_It_Navigates_To_LogOut_Page() throws Throwable {

		clickElement(pom.getInstanceDetails().getBooknow());

	}

	@Given("^user Must Went To The LogOut Page$")
	public void user_Must_Went_To_The_LogOut_Page() throws Throwable {

		System.out.println("Successfully Moved to Logout Page");

	}

	@When("^user Must Take The Screenshot Of Booking Page$")
	public void user_Must_Take_The_Screenshot_Of_Booking_Page() throws Throwable {

		String bookingScreenshot = File_Reader_Manager.getInstanceFRM().getInstanceCR().getScreenshotMethod();
		screenshotMethod(bookingScreenshot);
		
	}

	@When("^user Must Scroll The LogOut Button$")
	public void user_Must_Scroll_The_LogOut_Button() throws Throwable {

		scrollToElement(pom.getInstanceLogout().getLogout());

	}

	@Then("^user Must Click The Logout Button$")
	public void user_Must_Click_The_Logout_Button() throws Throwable {

		clickElement(pom.getInstanceLogout().getLogout());	

	}		
}