const Format = {
    msToDate: (time) => {
        // take ms and return day, month, date, year
        let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        time = new Date(time);
        let day = time.getDay();
        let month = time.getMonth();
        let date = time.getDate();
        let year = time.getFullYear();
        day = days[day];
        month = months[month];

        return `${month} ${year}`;
    },
    msToDay: (time) => {
        // take ms and return day, month, date, year
        let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        time = new Date(time);
        let day = time.getDay();
        let month = time.getMonth();
        let date = time.getDate();
        let year = time.getFullYear();
        day = days[day];
        month = months[month];

        return `${day}, ${month} ${date}, ${year}`;
    },
    msToDateObject: (date) => {
        date = new Date(date);
        let today = new Date(Date.now());
        date.setDate(1);
        date.setDate(date.getDate() - date.getDay());
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        let dateObject = {};
        for(let i = 0; i<35; i++){
            let string = `c${i + 1}`;
            dateObject[string] = date.getDate();
            if(date.getDate() === today.getDate() && date.getDay() === today.getDay() && date.getMonth() === today.getMonth()){
                dateObject['currentDay'] = i+1
            } 
            date.setDate(date.getDate() + 1);
        }
        return dateObject;     
    }
} 
export default Format;