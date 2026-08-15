// Module ID: 13709
// Function ID: 13710
// Name: element
// Dependencies: [13698, 13673]

// Module 13709 (element)
import all from "all";

let _moduleResult = all(require("module_13673").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13673").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13673).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
