Feature: execute Pipeline

  As John a software engineer I want to kick off a pipeline that I created and get feedback on the current state of the
  pipeline

  Scenario: Start the pipeline
    Given the pipeline has been created
    And the pipeline is not currently being executed
    When John starts the pipeline
    Then John should receive feedback on which stage the pipeline is
    Then John should receive feedback on which step within a stage the pipeline is
