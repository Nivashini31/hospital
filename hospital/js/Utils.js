const Utils = {
    getCompleteDate(dateString){
        const completeDate = dateString.split("-");
        const year = completeDate[0];
        let month = completeDate[1];
        month = month.padStart(2, 0);
        let date = completeDate[2];
        date = date.padStart(2, 0);

        return new Date(year+"-"+month+"-"+date);
    },
    getCompleteDateString(dateObj){
        const year = dateObj.getFullYear();
        let month = dateObj.getMonth()+1;
        month = (month+"").padStart(2, 0);
        let date = dateObj.getDate();
        date = (date+"").padStart(2, 0);

        return year+"-"+month+"-"+date;
    }
};