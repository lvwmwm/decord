// Module ID: 16160
// Function ID: 16161
// Dependencies: [16149, 16124]

// Module 16160
import _mod16124 from "module_16124" /* 16124 */;
import module_16149 from "module_16149" /* 16149 */;

let _moduleResult = module_16149(_mod16124.document);
if (_moduleResult) {
  const _module1 = module_16149;
  _moduleResult = _module1(_mod16124.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16124.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
