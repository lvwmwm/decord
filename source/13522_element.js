// Module ID: 13522
// Function ID: 13523
// Name: element
// Dependencies: [13511, 13486]

// Module 13522 (element)
import all from "all";

let _moduleResult = all(require("module_13486").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13486").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13486).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
