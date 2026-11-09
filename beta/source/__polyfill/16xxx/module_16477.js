// Module ID: 16477
// Function ID: 16478
// Dependencies: [16466, 16441]

// Module 16477
import _mod16441 from "module_16441" /* 16441 */;
import module_16466 from "module_16466" /* 16466 */;

let _moduleResult = module_16466(_mod16441.document);
if (_moduleResult) {
  const _module1 = module_16466;
  _moduleResult = _module1(_mod16441.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16441.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
