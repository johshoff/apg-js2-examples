// Demonstrates how back references work in universal mode.
(function(){
  var setup = require("./setup.js");
  var input = "xyby";
  var grammar = new (require("./universal-grammar.js"))();
  var displayname = "back-reference-universal";
  var doTrace = true;
  setup(input, grammar, displayname, doTrace);
})();
