// Module ID: 13485
// Function ID: 13486
// Name: element
// Dependencies: [13474, 13449]

// Module 13485 (element)
import all from "all";

let _moduleResult = all(require("module_13449").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13449").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13449).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
