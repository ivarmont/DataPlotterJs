const add = require("../source/main");

describe("add", () =>{
    it("should add two numbers",()=>{
        expect(add(1,2)).toBe(3);
    })    
    it("should return a sole input", ()=>{
        expect(add(5)).toBe(5);
    })
    it("should add three numbers", ()=>{
        expect(add(1,2,3)).toBe(6);
    })
    it("should return 0 for not a number", ()=>{
        expect(add()).toBe(0);
    })
})