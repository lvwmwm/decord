// Module ID: 15406
// Function ID: 15407
// Dependencies: [15395, 15370]

// Module 15406
import _mod15370 from "module_15370" /* 15370 */;
import module_15395 from "module_15395" /* 15395 */;

let _moduleResult = module_15395(_mod15370.document);
if (_moduleResult) {
  const _module1 = module_15395;
  _moduleResult = _module1(_mod15370.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15370.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
