// Module ID: 13319
// Function ID: 102053
// Name: element
// Dependencies: [13308, 13283]

// Module 13319 (element)
import all from "all";

let _moduleResult = all(require("check").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("check").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13283) /* check */.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
