// Module ID: 13417
// Function ID: 13418
// Name: element
// Dependencies: [13406, 13381]

// Module 13417 (element)
import all from "all";

let _moduleResult = all(require("module_13381").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13381").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13381).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
