// Module ID: 14020
// Function ID: 14021
// Name: element
// Dependencies: [14009, 13984]

// Module 14020 (element)
import _mod13984 from "module_13984" /* 13984 */;
import all from "module_14009" /* 14009 */;

let _moduleResult = all(_mod13984.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13984.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod13984.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
