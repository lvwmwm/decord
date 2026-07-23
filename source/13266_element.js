// Module ID: 13266
// Function ID: 101726
// Name: element
// Dependencies: [13255, 13230]

// Module 13266 (element)
import all from "all";

let _moduleResult = all(require("check").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("check").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13230) /* check */.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
