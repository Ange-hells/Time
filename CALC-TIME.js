var decimal_hours;
// var hours = Math.floor(decimal_hours);
// var minutes = Math.round((decimal_hours – hours)*60);
var seconds = Math.round(((decimal_hours – hours)*60 – minutes)*60);
console.log(hours + ‘h ‘ + minutes + ‘m ‘ + seconds + ‘s’);