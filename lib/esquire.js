var generate = require("escodegen"), traverse = generate.traverse, generate = generate.generate;
var parse = require("esprima").parse;
var define = require("./utils").define;
var Document = function () {
    function Document(source) {
      var ast = parse(source);
      console.log(ast);
    }
    Object.defineProperty(Document.prototype, "documentElement", {
      configurable: true,
      enumerable: true,
      get: function () {
      }
    });
    Document.prototype.createAttribute = function () {
    };
    Document.prototype.createElement = function () {
    };
    Document.prototype.createDocumentFragment = function () {
    };
    Document.prototype.getElementsByTagName = function () {
    };
    return Document;
  }();
var Node = function () {
    function Node() {
    }
    return Node;
  }();
module.exports = function (source) {
  new Document(source);
};