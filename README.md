How to Use

Setup: Ensure you have a modern web browser that supports JavaScript ES6+.

Initialization: The system initializes with an empty database ready to track patient data.

Adding Patients: New patient records can be added through the addPatient method, which requires a Patient object containing the patient's name, the date of visit, and their location status.

Data Retrieval: Retrieve the percentage of local vs. outstation patients for a specific date range using the getPercentageOfPatients method. This method can be called with different arguments:

End date and number of days to look back.
A specific end date (assumes a single day).
Number of days to look back from the current date.
