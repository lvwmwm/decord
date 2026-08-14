// Module ID: 13677
// Function ID: 13678
// Name: element
// Dependencies: [13666, 13641]

// Module 13677 (element)
import all from "all";

let _moduleResult = all(require("module_13641").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13641").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13641).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
