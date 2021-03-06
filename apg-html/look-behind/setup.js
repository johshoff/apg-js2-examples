// General execution module for the substring examples.
module.exports = function (input, grammar) {
  "use strict";
  var nodeUtil = require("util");
  var opts = {
    showHidden: true,
    depth: null
  };
  // Quick and dirty conversion of ascii chars to HTML format.
  // Needed for HTML display of grammars that contain HTML entity characters.
  var charsToHtml = function (chars) {
    var html = "";
    chars.forEach(function (char) {
      switch (char) {
        case 32:
          html += "&nbsp;";
          break;
        case 38:
          html += "&#38;";
          break;
        case 39:
          html += "&#39;";
          break;
        case 60:
          html += "&#60;";
          break;
        case 62:
          html += "&#62;";
          break;
        case 92:
          html += "&#92;";
          break;
        default:
          html += String.fromCharCode(char);
      }
    });
    return html;
  };
  try {
    var save = require("../../weblinks/tree-save.js");
    var apglib = require("apg-lib");
    var parser = new apglib.parser();
    parser.trace = new apglib.trace();
    parser.trace.filter.operators["<ALL>"] = true;
    /* parse the input string */
    var result = parser.parse(grammar, 0, input);
    /* output info to console */
    console.log();
    console.log("     input: " + input);
    console.log("   results:");
    console.dir(result, opts);

    // display the traced parse tree
    var name = "data.js";
    save(parser.trace, "unicode", name);
    console.log();
    console.log('include <script src="' + name + '"></script> in tree.html to view the parse tree.');

  } catch (e) {
    var msg = "\nEXCEPTION THROWN: ";
    +"\n";
    if (e instanceof Error) {
      msg += e.name + ": " + e.message;
    } else if (typeof (e) === "string") {
      msg += e;
    } else {
      msg += nodeUtil.inspect(e, opts);
    }
    process.exitCode = 1;
    console.log(msg);
    throw e;
  }
};
