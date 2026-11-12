// Module ID: 16509
// Function ID: 16510
// Dependencies: [16498, 16473]

// Module 16509
import _mod16473 from "module_16473" /* 16473 */;
import module_16498 from "module_16498" /* 16498 */;

let _moduleResult = module_16498(_mod16473.document);
if (_moduleResult) {
  const _module1 = module_16498;
  _moduleResult = _module1(_mod16473.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16473.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
