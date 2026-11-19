// Module ID: 15487
// Function ID: 15488
// Dependencies: [15476, 15451]

// Module 15487
import _mod15451 from "module_15451" /* 15451 */;
import module_15476 from "module_15476" /* 15476 */;

let _moduleResult = module_15476(_mod15451.document);
if (_moduleResult) {
  const _module1 = module_15476;
  _moduleResult = _module1(_mod15451.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15451.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
