// Module ID: 16409
// Function ID: 16410
// Dependencies: [16398, 16373]

// Module 16409
import _mod16373 from "module_16373" /* 16373 */;
import module_16398 from "module_16398" /* 16398 */;

let _moduleResult = module_16398(_mod16373.document);
if (_moduleResult) {
  const _module1 = module_16398;
  _moduleResult = _module1(_mod16373.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16373.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
