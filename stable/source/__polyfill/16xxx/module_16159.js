// Module ID: 16159
// Function ID: 16160
// Dependencies: [16148, 16123]

// Module 16159
import _mod16123 from "module_16123" /* 16123 */;
import module_16148 from "module_16148" /* 16148 */;

let _moduleResult = module_16148(_mod16123.document);
if (_moduleResult) {
  const _module1 = module_16148;
  _moduleResult = _module1(_mod16123.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16123.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
