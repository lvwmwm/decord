// Module ID: 16783
// Function ID: 16784
// Dependencies: [16772, 16747]

// Module 16783
import _mod16747 from "module_16747" /* 16747 */;
import module_16772 from "module_16772" /* 16772 */;

let _moduleResult = module_16772(_mod16747.document);
if (_moduleResult) {
  const _module1 = module_16772;
  _moduleResult = _module1(_mod16747.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16747.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
