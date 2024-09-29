//get date from system
function updateTime()
{
    const currentDate =  new Date();


//get date & time details from date constructor

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; 
const day = currentDate.getDate();
var hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const Thours= hours <= 12 ? 'AM' : 'PM'

const formathr = hours % 12 || 12

//display Date & time as format


const formattedDate = `${day}-${month}-${year}`;
const formattedTime = `${formathr}:${minutes}:${seconds} ${Thours}`;
const dateDisplay = `Date: ${formattedDate}`;
const TimeDisplay = `Time: ${formattedTime}`;

document.getElementById('date').textContent = dateDisplay;
document.getElementById('Time').textContent = TimeDisplay;
}

//for seconds changing purpose
setInterval(updateTime,1000);



   

