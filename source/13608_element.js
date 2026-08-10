// Module ID: 13608
// Function ID: 13609
// Name: element
// Dependencies: [13597, 13572]

// Module 13608 (element)
import all from "all";

let _moduleResult = all(require("module_13572").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13572").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13572).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
