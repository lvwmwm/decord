// Module ID: 13375
// Function ID: 102358
// Name: element
// Dependencies: [13364, 13339]

// Module 13375 (element)
import all from "all";

let _moduleResult = all(require("check").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("check").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13339) /* check */.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
