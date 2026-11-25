// Module ID: 15717
// Function ID: 15718
// Dependencies: [15706, 15681]

// Module 15717
import _mod15681 from "module_15681" /* 15681 */;
import module_15706 from "module_15706" /* 15706 */;

let _moduleResult = module_15706(_mod15681.document);
if (_moduleResult) {
  const _module1 = module_15706;
  _moduleResult = _module1(_mod15681.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15681.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
