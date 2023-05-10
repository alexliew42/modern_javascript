const moment = require('moment');
const { sqrt } = require('mathjs');
const { simplify, parse, derivative } = require('mathjs');
var slugify = require("underscore.string/slugify");




console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(simplify('2 * 3 * x', { x: 4 }).toString());
console.log("change is hapeening");
console.log(slugify("Hello World This is working."));



