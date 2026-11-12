// Module ID: 16660
// Function ID: 16661
// Dependencies: [16649, 16624]

// Module 16660
import _mod16624 from "module_16624" /* 16624 */;
import module_16649 from "module_16649" /* 16649 */;

let _moduleResult = module_16649(_mod16624.document);
if (_moduleResult) {
  const _module1 = module_16649;
  _moduleResult = _module1(_mod16624.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16624.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
