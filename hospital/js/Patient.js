class Patient {
    constructor(name, date, location) {
        this.name = name;
        this.date = Utils.getCompleteDate(date);
        this.location = location;
    }

    isLocal(){
        return this.location == "local" ? true : false;
    }
};