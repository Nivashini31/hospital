How to Use

Setup: Ensure you have a modern web browser that supports JavaScript ES6+.

Initialization: The system initializes with an empty database ready to track patient data.

Adding Patients: New patient records can be added through the addPatient method, which requires a Patient object containing the patient's name, the date of visit, and their location status.

Data Retrieval: Retrieve the percentage of local vs. outstation patients for a specific date range using the getPercentageOfPatients method. This method can be called with different arguments:

End date and number of days to look back.
A specific end date (assumes a single day).
Number of days to look back from the current date.

Example Usage:

```javascript
document.addEventListener('DOMContentLoaded', function () {
    let h = new Hospital();
    h.addPatient(new Patient("Srisha", "2024-2-23", "local"));
    h.addPatient(new Patient("Krishna", "2024-2-22", "local"));
    h.addPatient(new Patient("Catherine", "2024-2-21", "outpatient"));
    h.addPatient(new Patient("Kate", "2024-2-24", "outpatient"));
    h.addPatient(new Patient("Katerine", "2024-2-24", "outpatient"));
    console.log(h.getPercentageOfPatients("2024-2-23", 3)); // For a 3-day period ending on 2024-2-23
    console.log(h.getPercentageOfPatients("2024-2-24")); // For the day of 2024-2-24
    console.log(h.getPercentageOfPatients(5)); // For the last 5 days from the current date
});
