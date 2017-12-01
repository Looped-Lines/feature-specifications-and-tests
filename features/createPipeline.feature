Feature: Create a pipeline

  As John a software engineer I want a visual representation of various stages and the quality gates my software goes
  through before it is deployed to production

  Scenario: Create the first stage

    Given that John has not added any stages to his pipeline
    When he creates a stage
    Then the stage should be created

  Scenario: Add a step to a stage
    Given that John already created a stage
    When John adds a step to the created stage
    Then the step should be added to the stage