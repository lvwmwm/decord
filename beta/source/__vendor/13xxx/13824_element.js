// Module ID: 13824
// Function ID: 13825
// Name: element
// Dependencies: [13813, 13788]

// Module 13824 (element)
import _mod13788 from "module_13788" /* 13788 */;
import all from "module_13813" /* 13813 */;

let _moduleResult = all(_mod13788.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13788.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod13788.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
