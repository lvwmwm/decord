// Module ID: 15768
// Function ID: 15769
// Dependencies: [15757, 15732]

// Module 15768
import _mod15732 from "module_15732" /* 15732 */;
import module_15757 from "module_15757" /* 15757 */;

let _moduleResult = module_15757(_mod15732.document);
if (_moduleResult) {
  const _module1 = module_15757;
  _moduleResult = _module1(_mod15732.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15732.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
