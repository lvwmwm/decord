// Module ID: 16422
// Function ID: 16423
// Dependencies: [16411, 16386]

// Module 16422
import _mod16386 from "module_16386" /* 16386 */;
import module_16411 from "module_16411" /* 16411 */;

let _moduleResult = module_16411(_mod16386.document);
if (_moduleResult) {
  const _module1 = module_16411;
  _moduleResult = _module1(_mod16386.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16386.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
