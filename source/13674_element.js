// Module ID: 13674
// Function ID: 13675
// Name: element
// Dependencies: [13663, 13638]

// Module 13674 (element)
import all from "all";

let _moduleResult = all(require("module_13638").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13638").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13638).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
