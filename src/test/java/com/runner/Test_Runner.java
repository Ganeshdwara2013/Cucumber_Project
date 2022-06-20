package com.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import com.Cucumber_Project.Baseclass;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\Karthik\\eclipse-workspace\\Cucumber_Project\\src\\test\\java\\com\\features\\Adactin.feature", 
				 glue = "com.stepdefinition",
				 monochrome = true, dryRun = false, strict = true,
				 tags = ("@LoginTest, @HotelSelectionTest, @RadioButtonTest, @DetailsTest, @LogoutTest"),
				 plugin = {"html:CucumberReport",
						 "json:CucumberReport/cucumber.json",				 
//						 "pretty", 
						 "com.cucumber.listener.ExtentCucumberFormatter:CucumberReport/Adactin.html"})

// Refer Notes for Additional Information
// monochrome = true means, in console output will not show question mark or something
// dryRun = true means, it will launch browser and comeback.
// Strict = false means, read the things between stepdefinition and feature during running.
// "~tags" will exclude the particular tag, example here is ("~@HotelSelectionTest"), where as normal tag will execute as like with the name.
// html report .html file in CucumberReport
// json report is .json file in json report
// Pretty report is used to prints in console.
// Extent Report will print in cucumber report folder


public class Test_Runner {

	public static WebDriver driver; // null
	
	@BeforeClass
	public static void setUp() {

		driver = Baseclass.launchBrowser("chrome");
	}
	
	
  @AfterClass
	public static void tearDown() {

		// driver.close();
		Baseclass.closeBrowser();
	}
}