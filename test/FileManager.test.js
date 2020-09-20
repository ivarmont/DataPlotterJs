"use strict";
var fs = require('fs');
const csvToArray = require("../source/FileManager").default;

describe("csvToArray", () =>{
    var path =__dirname +'/resources/dataset.csv';
    var content = fs.readFileSync(path, 'utf8');
    it("should open a file",()=>{
        expect(csvToArray(content)).not.toBe(null);
    })    
})