// Module ID: 15356
// Function ID: 15357
// Dependencies: [15345, 15320]

// Module 15356
import _mod15320 from "module_15320" /* 15320 */;
import module_15345 from "module_15345" /* 15345 */;

let _moduleResult = module_15345(_mod15320.document);
if (_moduleResult) {
  const _module1 = module_15345;
  _moduleResult = _module1(_mod15320.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15320.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
