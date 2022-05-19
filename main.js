
let hr = 00;
let min = 00;
let sec = 0;
let count = 0;

let flag = false;

function start() {
   flag =true 
   stopwatch()
}

function stop() {
   flag = false;
}

function reset() {
    flag = false;

    hr=0
    min=0
    sec=0
    count=0
    document.getElementById('hr').innerHTML = "00"
        document.getElementById('min').innerHTML = "00"
        document.getElementById('sec').innerHTML = "00"
        document.getElementById('count').innerHTML = "00"
}

let stopwatch = () => {
    if (flag == true)
    {
        count = count + 1;

        if(count == 60){
            sec = sec + 1
            count = 0
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if(min == 60)
        {
            hr = hr + 1
            min = 0;
            sec = 0;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;
        
        if(hr < 10) {
            hrString = "0" + hrString
        }
        if(min < 10) {
            minString = "0" + minString
        }
        if(sec < 10) {
            secString = "0" + secString
        }
        if(count < 10) {
            countString = "0" + countString
        }
        



        document.getElementById('hr').innerHTML = hrString
        document.getElementById('min').innerHTML = minString
        document.getElementById('sec').innerHTML = secString
        document.getElementById('count').innerHTML = countString
        
        setTimeout( "stopwatch()", 10 )
    }
}