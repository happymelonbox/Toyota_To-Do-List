window.onload = function () {
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;
document.getElementById('date').innerHTML = `Date: ${currentDate}`; 
}