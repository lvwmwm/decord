// Module ID: 13606
// Function ID: 13607
// Name: element
// Dependencies: [13595, 13570]

// Module 13606 (element)
import all from "all";

let _moduleResult = all(require("module_13570").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13570").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13570).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
