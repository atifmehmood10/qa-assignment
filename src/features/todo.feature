@TODOTest @UITest
Feature: TODO Features testing

  Background:
  Given User opens the TODO homepage

  Scenario: Verify the TODO Item is added and visible in Active tab
    And User adds new TODO Item with name "Todo : Test Case 1"
    And User switches to "Active" tab
    Then User verifies the TODO item has been added with name "Todo : Test Case 1"


  Scenario: Verify the TODO Item is marked complete
    And User adds new TODO Item with name "Todo : Test Case 2"
    And User marks the TODO item "Todo : Test Case 2" completed
    And User switches to "Completed" tab
    Then User verifies the TODO Item "Todo : Test Case 2" is marked completed


  Scenario: Verify the TODO Item is deleted
    And User adds new TODO Item with name "Todo : Test Case 3"
    And User deletes the TODO Item with name "Todo : Test Case 3"
    Then User verifies the TODO Item "Todo : Test Case 3" is deleted


  Scenario: Verify multiple TODO Items are added
    And User adds new TODO Item with name "Todo : Test Case 4 : Item 1"
    Then User verifies the TODO item has been added with name "Todo : Test Case 4 : Item 1"
    And User adds new TODO Item with name "Todo : Test Case 4 : Item 2"
    Then User verifies the TODO item has been added with name "Todo : Test Case 4 : Item 2"
    And User adds new TODO Item with name "Todo : Test Case 4 : Item 3"
    Then User verifies the TODO item has been added with name "Todo : Test Case 4 : Item 3"


  Scenario: Verify Clear Completed functionality is working
    And User adds new TODO Item with name "Todo : Test Case 5 : Item 1"
    And User adds new TODO Item with name "Todo : Test Case 5 : Item 2"
    And User adds new TODO Item with name "Todo : Test Case 5 : Item Not Completed"
    Then User marks the TODO item "Todo : Test Case 5 : Item 1" completed
    And User marks the TODO item "Todo : Test Case 5 : Item 2" completed
    Then User switches to "Completed" tab
    And User verifies the TODO Item "Todo : Test Case 5 : Item 1" is marked completed
    And User verifies the TODO Item "Todo : Test Case 5 : Item 2" is marked completed
    Then User presses Clear completed
    Then User verifies the TODO Item "Todo : Test Case 5 : Item 1" is deleted
    Then User verifies the TODO Item "Todo : Test Case 5 : Item 2" is deleted
    Then User switches to "All" tab
    Then User verifies the TODO item has been added with name "Todo : Test Case 5 : Item Not Completed"


  Scenario: Verify the items left counter is functional or not
    When User adds new TODO Item with name "Todo : Test Case 6 : Item 1"
    Then User verifies the counter is changed to "1"
    When User adds new TODO Item with name "Todo : Test Case 6 : Item 2"
    Then User verifies the counter is changed to "2"


  Scenario: Verify the TODO Item can be edited
    When User adds new TODO Item with name "Todo : Test Case 7"
    Then User edits the TODO Item "Todo : Test Case 7" to "TODO : Test Case Edited"
    Then User verifies the TODO item has been updated to "TODO : Test Case Edited"
