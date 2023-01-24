# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. ## Add custom id field to Agent table in database
- Acceptance Criteria: The Agent table in the database should have an additional field for a custom id, which can be set by the Facility
- Time/Effort Estimate: `1 hour`
- Implementation Details: This can be achieved by adding a new column to the Agent table in the database and updating the relevant database access functions to allow for setting and retrieving the custom id field.

2. ## Allow Facilities to set custom ids for Agents
- Acceptance Criteria: Facilities should be able to specify a custom id for each Agent when adding or editing them on the platform
- Time/Effort Estimate: `2 hours`
- Implementation Details: This can be achieved by adding a new field for custom id to the forms used for adding and editing Agents on the platform, and updating the relevant controller functions to handle setting the custom id in the database.

3. ## Use custom ids in generateReport function
- Acceptance Criteria: The generateReport function should use the custom id for each Agent, if set, instead of the internal database id when generating reports
- Time/Effort Estimate: `1 hour`
- Implementation Details: This can be achieved by updating the generateReport function to retrieve the custom id for each Agent, if set, and use it in the report instead of the internal database id.

4. ## Add validation for custom ids
- Acceptance Criteria: A custom id must be unique for each Agent within a Facility
- Time/Effort Estimate: `0.5 hour`
- Implementation Details: This can be achieved by adding a unique constraint on the custom id column for the Agent table in the database and adding validation on the forms and functions that handle setting custom ids to check for uniqueness.

5. ## Add tests for custom ids
- Acceptance Criteria: The custom id functionality should be thoroughly tested
- Time/Effort Estimate: `1 hour`
- Implementation Details: This can be achieved by adding unit tests for all functions and controllers that handle custom ids and integration tests to ensure that custom ids are correctly set and retrieved in the database and used in the generateReport function.