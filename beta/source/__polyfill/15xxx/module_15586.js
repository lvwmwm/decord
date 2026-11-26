// Module ID: 15586
// Function ID: 15587
// Dependencies: [15575, 15550]

// Module 15586
import _mod15550 from "module_15550" /* 15550 */;
import module_15575 from "module_15575" /* 15575 */;

let _moduleResult = module_15575(_mod15550.document);
if (_moduleResult) {
  const _module1 = module_15575;
  _moduleResult = _module1(_mod15550.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15550.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
