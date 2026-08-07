// Module ID: 13536
// Function ID: 13537
// Name: element
// Dependencies: [13525, 13500]

// Module 13536 (element)
import all from "all";

let _moduleResult = all(require("module_13500").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13500").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13500).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
