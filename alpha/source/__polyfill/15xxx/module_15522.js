// Module ID: 15522
// Function ID: 15523
// Dependencies: [15511, 15486]

// Module 15522
import _mod15486 from "module_15486" /* 15486 */;
import module_15511 from "module_15511" /* 15511 */;

let _moduleResult = module_15511(_mod15486.document);
if (_moduleResult) {
  const _module1 = module_15511;
  _moduleResult = _module1(_mod15486.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15486.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
