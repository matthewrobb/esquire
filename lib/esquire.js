var generate = require("escodegen"), traverse = generate.traverse, generate = generate.generate;
var define = require("./utils").define;
var Node = function () {
    function Node() {
    }
    return Node;
  }();
var Program = function (_super) {
    function __ctor() {
      this.constructor = Program;
    }
    __ctor.prototype = _super.prototype;
    Program.prototype = new __ctor();
    Program.__super__ = _super.prototype;
    function Program() {
    }
    return Program;
  }(Node);
module.exports = function (tree) {
  console.log(new $(tree).test);
};