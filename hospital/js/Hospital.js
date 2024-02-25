class Hospital {
    #hospitalData;
    constructor() {

        this.#hospitalData = new Map();
    }

    addPatient(patient) {
        this.recordPatientLocation(patient);
    }

    recordPatientLocation(patient) {

        const completeDateString = Utils.getCompleteDateString(patient.date);

        if (!this.#hospitalData.has(completeDateString)) {
            this.#hospitalData.set((completeDateString), {
                local: 0,
                outstation: 0
            });
        }

        if (patient.isLocal()) {
            this.#hospitalData.get(completeDateString).local++;
        } else {
            this.#hospitalData.get(completeDateString).outstation++;
        }

    }

    getPercentageOfPatients(endDate, nDays) {  //start july 7 3
        const response = {
            localOPPercentage: 0.0,
            outstationOPPercentage: 0.0,
            totalOPs: 0
        };
        let completeDate;
        if (typeof endDate === 'string') {

            completeDate = Utils.getCompleteDate(endDate);
            if (!nDays)
                nDays = 1;
        } else if (typeof endDate === 'number') {
            nDays = endDate;
            completeDate = new Date();
        } else {
            throw new Error('Invalid argument type');
        }


        let completeDateString = Utils.getCompleteDateString(completeDate);


        let localOPs = 0;
        while (nDays > 0) {
            if (this.#hospitalData.has(completeDateString)) {
                response.totalOPs += this.#hospitalData.get(completeDateString).local + this.#hospitalData.get(completeDateString).outstation;
                localOPs += this.#hospitalData.get(completeDateString).local;
            }


            completeDate.setDate(completeDate.getDate() - 1);
            completeDateString = Utils.getCompleteDateString(completeDate);

            nDays--;
        }

        if (response.totalOPs) {
            response.localOPPercentage = parseFloat((localOPs / response.totalOPs * 100).toFixed(2));
            response.outstationOPPercentage = 100 - response.localOPPercentage;
        }

        return response;
    }

}