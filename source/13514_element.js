// Module ID: 13514
// Function ID: 13515
// Name: element
// Dependencies: [13503, 13478]

// Module 13514 (element)
import all from "all";

let _moduleResult = all(require("module_13478").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13478").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13478).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
