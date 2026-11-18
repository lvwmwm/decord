// Module ID: 15501
// Function ID: 15502
// Dependencies: [15490, 15465]

// Module 15501
import _mod15465 from "module_15465" /* 15465 */;
import module_15490 from "module_15490" /* 15490 */;

let _moduleResult = module_15490(_mod15465.document);
if (_moduleResult) {
  const _module1 = module_15490;
  _moduleResult = _module1(_mod15465.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15465.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
