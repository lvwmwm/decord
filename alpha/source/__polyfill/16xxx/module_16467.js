// Module ID: 16467
// Function ID: 16468
// Dependencies: [16456, 16431]

// Module 16467
import _mod16431 from "module_16431" /* 16431 */;
import module_16456 from "module_16456" /* 16456 */;

let _moduleResult = module_16456(_mod16431.document);
if (_moduleResult) {
  const _module1 = module_16456;
  _moduleResult = _module1(_mod16431.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16431.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
