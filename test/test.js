var expect = require("chai").expect

var parse = require("esprima").parse

var esquire = require("../lib/esquire")

describe("init testing", function() {
  it("", function(){
    var code = "var x;"
    var ast = parse(code)
    esquire(ast)
  })
})