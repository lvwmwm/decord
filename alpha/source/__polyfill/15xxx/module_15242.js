// Module ID: 15242
// Function ID: 15243
// Dependencies: [15231, 15206]

// Module 15242
import _mod15206 from "module_15206" /* 15206 */;
import module_15231 from "module_15231" /* 15231 */;

let _moduleResult = module_15231(_mod15206.document);
if (_moduleResult) {
  const _module1 = module_15231;
  _moduleResult = _module1(_mod15206.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15206.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
