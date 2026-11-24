// Module ID: 15572
// Function ID: 15573
// Dependencies: [15561, 15536]

// Module 15572
import _mod15536 from "module_15536" /* 15536 */;
import module_15561 from "module_15561" /* 15561 */;

let _moduleResult = module_15561(_mod15536.document);
if (_moduleResult) {
  const _module1 = module_15561;
  _moduleResult = _module1(_mod15536.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15536.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
