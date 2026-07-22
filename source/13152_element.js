// Module ID: 13152
// Function ID: 99570
// Name: element
// Dependencies: []

// Module 13152 (element)
const _module = require(dependencyMap[0]);
let _moduleResult = _module(require(dependencyMap[1]).document);
if (_moduleResult) {
  const _module1 = require(dependencyMap[0]);
  _moduleResult = _module1(require(dependencyMap[1]).document.createElement);
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
