function isLeapYear(d) {
    let myDate = new Date(d);
    if(isNaN(myDate.getTime())) {
        return 'Invalid Date';
    } else {
       let myYear = myDate.getFullYear();
        if(new Date(myYear, 1, 29).getDate() === 29) {
            return ''+myYear+' is a leap year';
        } else {
            return ''+myYear+' is not a leap year';
        }  
    }
}

isLeapYear();