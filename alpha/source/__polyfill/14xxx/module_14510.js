// Module ID: 14510
// Function ID: 14511
// Dependencies: [14499, 14474]

// Module 14510
import _mod14474 from "module_14474" /* 14474 */;
import module_14499 from "module_14499" /* 14499 */;

let _moduleResult = module_14499(_mod14474.document);
if (_moduleResult) {
  const _module1 = module_14499;
  _moduleResult = _module1(_mod14474.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod14474.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
