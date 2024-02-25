document.addEventListener('DOMContentLoaded', function () {
    h = new Hospital();

    h.addPatient(new Patient("Srisha", "2024-2-23", "local"));
    h.addPatient(new Patient("Krishna", "2024-2-22", "local"));
    h.addPatient(new Patient("Catherine", "2024-2-21", "outpatient"));
    h.addPatient(new Patient("Kate", "2024-2-24", "outpatient"));
    h.addPatient(new Patient("Katery", "2024-2-24", "outpatient"));
    

    console.log(h.getPercentageOfPatients("2024-2-23", 3));
    console.log(h.getPercentageOfPatients("2024-2-24"));
    console.log(h.getPercentageOfPatients(5));
});