// Module ID: 13825
// Function ID: 13826
// Name: element
// Dependencies: [13814, 13789]

// Module 13825 (element)
import _mod13789 from "module_13789" /* 13789 */;
import all from "module_13814" /* 13814 */;

let _moduleResult = all(_mod13789.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13789.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod13789.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
