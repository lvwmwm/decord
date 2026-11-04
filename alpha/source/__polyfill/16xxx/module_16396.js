// Module ID: 16396
// Function ID: 16397
// Dependencies: [16385, 16360]

// Module 16396
import _mod16360 from "module_16360" /* 16360 */;
import module_16385 from "module_16385" /* 16385 */;

let _moduleResult = module_16385(_mod16360.document);
if (_moduleResult) {
  const _module1 = module_16385;
  _moduleResult = _module1(_mod16360.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16360.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
