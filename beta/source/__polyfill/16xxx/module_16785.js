// Module ID: 16785
// Function ID: 16786
// Dependencies: [16774, 16749]

// Module 16785
import _mod16749 from "module_16749" /* 16749 */;
import module_16774 from "module_16774" /* 16774 */;

let _moduleResult = module_16774(_mod16749.document);
if (_moduleResult) {
  const _module1 = module_16774;
  _moduleResult = _module1(_mod16749.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16749.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
