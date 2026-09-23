// Module ID: 14699
// Function ID: 14700
// Name: element
// Dependencies: [14688, 14663]

// Module 14699 (element)
import _mod14663 from "module_14663" /* 14663 */;
import all from "module_14688" /* 14688 */;

let _moduleResult = all(_mod14663.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14663.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14663.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
