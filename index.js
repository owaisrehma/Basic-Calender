const monthEl = document.getElementById("month-name");
const dayEl = document.getElementById("day-name");
const dateEl = document.getElementById("date-name");
const yearEl = document.getElementById("year");

const date = new Date();
console.log(Date);

monthEl.innerText = date.toLocaleString("en",{
    month:"long"
});

dayEl.innerText = date.toLocaleString("en",{
    weekday:"long"
})

dateEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();






 