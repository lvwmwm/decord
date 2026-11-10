// Module ID: 16504
// Function ID: 16505
// Dependencies: [16493, 16468]

// Module 16504
import _mod16468 from "module_16468" /* 16468 */;
import module_16493 from "module_16493" /* 16493 */;

let _moduleResult = module_16493(_mod16468.document);
if (_moduleResult) {
  const _module1 = module_16493;
  _moduleResult = _module1(_mod16468.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16468.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
