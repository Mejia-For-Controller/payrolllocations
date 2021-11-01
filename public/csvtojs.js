const editJsonFile = require("edit-json-file");

// If the file doesn't exist, the content will be an empty object by default.
let file = editJsonFile(`${__dirname}/export.json`);


const fs = require('fs');
const csvToObj = require('csv-to-js-parser').csvToObj;

const data = fs.readFileSync('export-cityemployeeslivev3-8.csv').toString();


let obj = csvToObj(data);


file.set("list", obj);

file.save();