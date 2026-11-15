// Module ID: 16507
// Function ID: 16508
// Dependencies: [16496, 16471]

// Module 16507
import _mod16471 from "module_16471" /* 16471 */;
import module_16496 from "module_16496" /* 16496 */;

let _moduleResult = module_16496(_mod16471.document);
if (_moduleResult) {
  const _module1 = module_16496;
  _moduleResult = _module1(_mod16471.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16471.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
