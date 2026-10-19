// Module ID: 15360
// Function ID: 15361
// Dependencies: [15349, 15324]

// Module 15360
import _mod15324 from "module_15324" /* 15324 */;
import module_15349 from "module_15349" /* 15349 */;

let _moduleResult = module_15349(_mod15324.document);
if (_moduleResult) {
  const _module1 = module_15349;
  _moduleResult = _module1(_mod15324.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15324.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
