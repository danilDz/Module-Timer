function timer(id, deadline){

    //Timer

    function getTimeRemaining (endtime) {
        const t = Date.parse(endtime) - Date.parse( new Date()),
              days = Math.trunc(t / 86400000),
              hours = Math.trunc((t-days*86400000) / 3600000)-2, 
              minutes = Math.trunc((t-days*86400000-(hours+2)*3600000) / 60000),
              seconds = Math.trunc((t-days*86400000-(hours+2)*3600000-minutes*60000) / 1000); 
        
        
        return{
            'total': t,
            'days' : days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero (num){
        if(num>=0 && num < 10){
            return `0${num}`;
        } else{
            return num;
        }
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              daysDoc = timer.querySelector('#days'),
              hoursDoc = timer.querySelector('#hours'),
              minutesDoc = timer.querySelector('#minutes'),
              secondsDoc = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock(){
            const t = getTimeRemaining(endtime);

            daysDoc.innerHTML = getZero(t.days);
            hoursDoc.innerHTML = getZero(t.hours);
            minutesDoc.innerHTML = getZero(t.minutes);
            secondsDoc.innerHTML = getZero(t.seconds);

            if (t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
}

export default timer;