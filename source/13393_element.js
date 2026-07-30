// Module ID: 13393
// Function ID: 13394
// Name: element
// Dependencies: [13382, 13357]

// Module 13393 (element)
import all from "all";

let _moduleResult = all(require("module_13357").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13357").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13357).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
