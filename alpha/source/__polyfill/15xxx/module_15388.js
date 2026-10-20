// Module ID: 15388
// Function ID: 15389
// Dependencies: [15377, 15352]

// Module 15388
import _mod15352 from "module_15352" /* 15352 */;
import module_15377 from "module_15377" /* 15377 */;

let _moduleResult = module_15377(_mod15352.document);
if (_moduleResult) {
  const _module1 = module_15377;
  _moduleResult = _module1(_mod15352.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15352.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
