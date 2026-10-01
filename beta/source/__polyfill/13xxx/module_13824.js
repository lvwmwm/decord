// Module ID: 13824
// Function ID: 13825
// Dependencies: [13813, 13788]

// Module 13824
import _mod13788 from "module_13788" /* 13788 */;
import module_13813 from "module_13813" /* 13813 */;

let _moduleResult = module_13813(_mod13788.document);
if (_moduleResult) {
  const _module1 = module_13813;
  _moduleResult = _module1(_mod13788.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod13788.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
