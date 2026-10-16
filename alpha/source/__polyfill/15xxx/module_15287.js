// Module ID: 15287
// Function ID: 15288
// Dependencies: [15276, 15251]

// Module 15287
import _mod15251 from "module_15251" /* 15251 */;
import module_15276 from "module_15276" /* 15276 */;

let _moduleResult = module_15276(_mod15251.document);
if (_moduleResult) {
  const _module1 = module_15276;
  _moduleResult = _module1(_mod15251.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15251.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
