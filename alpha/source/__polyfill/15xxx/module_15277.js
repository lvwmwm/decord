// Module ID: 15277
// Function ID: 15278
// Dependencies: [15266, 15241]

// Module 15277
import _mod15241 from "module_15241" /* 15241 */;
import module_15266 from "module_15266" /* 15266 */;

let _moduleResult = module_15266(_mod15241.document);
if (_moduleResult) {
  const _module1 = module_15266;
  _moduleResult = _module1(_mod15241.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15241.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
