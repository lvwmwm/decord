// Module ID: 16119
// Function ID: 16120
// Dependencies: [16108, 16083]

// Module 16119
import _mod16083 from "module_16083" /* 16083 */;
import module_16108 from "module_16108" /* 16108 */;

let _moduleResult = module_16108(_mod16083.document);
if (_moduleResult) {
  const _module1 = module_16108;
  _moduleResult = _module1(_mod16083.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16083.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
