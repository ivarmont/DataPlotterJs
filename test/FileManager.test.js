const open = require("../source/FileManager");

describe("open", () =>{
    it("should open a file",()=>{
        expect(open("./resources/dataset.csv")).not.toBe(null);
    })    
})