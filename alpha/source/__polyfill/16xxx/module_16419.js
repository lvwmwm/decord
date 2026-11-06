// Module ID: 16419
// Function ID: 16420
// Dependencies: [16408, 16383]

// Module 16419
import _mod16383 from "module_16383" /* 16383 */;
import module_16408 from "module_16408" /* 16408 */;

let _moduleResult = module_16408(_mod16383.document);
if (_moduleResult) {
  const _module1 = module_16408;
  _moduleResult = _module1(_mod16383.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16383.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
