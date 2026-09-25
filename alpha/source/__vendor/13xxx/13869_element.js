// Module ID: 13869
// Function ID: 13870
// Name: element
// Dependencies: [13858, 13833]

// Module 13869 (element)
import _mod13833 from "module_13833" /* 13833 */;
import all from "module_13858" /* 13858 */;

let _moduleResult = all(_mod13833.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13833.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod13833.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
