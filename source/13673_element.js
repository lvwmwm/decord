// Module ID: 13673
// Function ID: 13674
// Name: element
// Dependencies: [13662, 13637]

// Module 13673 (element)
import all from "all";

let _moduleResult = all(require("module_13637").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13637").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13637).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
