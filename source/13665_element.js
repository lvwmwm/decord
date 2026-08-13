// Module ID: 13665
// Function ID: 13666
// Name: element
// Dependencies: [13654, 13629]

// Module 13665 (element)
import all from "all";

let _moduleResult = all(require("module_13629").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13629").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13629).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
