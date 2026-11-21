// Module ID: 15574
// Function ID: 15575
// Dependencies: [15563, 15538]

// Module 15574
import _mod15538 from "module_15538" /* 15538 */;
import module_15563 from "module_15563" /* 15563 */;

let _moduleResult = module_15563(_mod15538.document);
if (_moduleResult) {
  const _module1 = module_15563;
  _moduleResult = _module1(_mod15538.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15538.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
