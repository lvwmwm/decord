// Module ID: 15582
// Function ID: 15583
// Dependencies: [15571, 15546]

// Module 15582
import _mod15546 from "module_15546" /* 15546 */;
import module_15571 from "module_15571" /* 15571 */;

let _moduleResult = module_15571(_mod15546.document);
if (_moduleResult) {
  const _module1 = module_15571;
  _moduleResult = _module1(_mod15546.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15546.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
