// Module ID: 13616
// Function ID: 13617
// Name: element
// Dependencies: [13605, 13580]

// Module 13616 (element)
import all from "all";

let _moduleResult = all(require("module_13580").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13580").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13580).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
