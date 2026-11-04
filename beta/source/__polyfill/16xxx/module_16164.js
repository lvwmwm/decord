// Module ID: 16164
// Function ID: 16165
// Dependencies: [16153, 16128]

// Module 16164
import _mod16128 from "module_16128" /* 16128 */;
import module_16153 from "module_16153" /* 16153 */;

let _moduleResult = module_16153(_mod16128.document);
if (_moduleResult) {
  const _module1 = module_16153;
  _moduleResult = _module1(_mod16128.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16128.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
