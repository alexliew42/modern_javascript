/* global moment */

console.log("I am in the index.js file");
var datetime = moment().startOf("day").fromNow();
console.log(datetime);

var dat = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(dat);