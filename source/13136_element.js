// Module ID: 13136
// Function ID: 99492
// Name: element
// Dependencies: [4294967295, 0]

// Module 13136 (element)
const _module = require(dependencyMap[0]);
let _moduleResult = _module(require("result").document);
if (_moduleResult) {
  const _module1 = require(dependencyMap[0]);
  _moduleResult = _module1(require("result").document.createElement);
}

export default (arg0) => {
  if (_moduleResult) {
    const _document = require(dependencyMap[1]).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
