// Module ID: 15617
// Function ID: 15618
// Dependencies: [15606, 15581]

// Module 15617
import _mod15581 from "module_15581" /* 15581 */;
import module_15606 from "module_15606" /* 15606 */;

let _moduleResult = module_15606(_mod15581.document);
if (_moduleResult) {
  const _module1 = module_15606;
  _moduleResult = _module1(_mod15581.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15581.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
