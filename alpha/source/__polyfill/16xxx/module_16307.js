// Module ID: 16307
// Function ID: 16308
// Dependencies: [16296, 16271]

// Module 16307
import _mod16271 from "module_16271" /* 16271 */;
import module_16296 from "module_16296" /* 16296 */;

let _moduleResult = module_16296(_mod16271.document);
if (_moduleResult) {
  const _module1 = module_16296;
  _moduleResult = _module1(_mod16271.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16271.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
