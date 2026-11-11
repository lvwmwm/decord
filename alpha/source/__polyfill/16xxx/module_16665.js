// Module ID: 16665
// Function ID: 16666
// Dependencies: [16654, 16629]

// Module 16665
import _mod16629 from "module_16629" /* 16629 */;
import module_16654 from "module_16654" /* 16654 */;

let _moduleResult = module_16654(_mod16629.document);
if (_moduleResult) {
  const _module1 = module_16654;
  _moduleResult = _module1(_mod16629.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16629.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
