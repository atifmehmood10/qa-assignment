@RestAPI
Feature: RESTApi Tests

  Scenario: Verify API Response and Schema for getting resource
    Given User hits the api
    Then User verifies schema and response code for getting resource


  Scenario: Verify API Response and Schema for creating resource
    Given User hits the api
    Then User verifies schema and response code for create resource

  Scenario: Verify API Response and Schema for updating resource
    Given User hits the api
    Then User verifies schema and response code for editing the resource


  Scenario: Verify API Response and Schema for patching resource
    Given User hits the api
    Then User verifies schema and response code for patching the resource

  Scenario: Verify API Response for deleting resource
    Given User hits the api
    Then User verifies response code for deleting the resource
