// Module ID: 15556
// Function ID: 15557
// Dependencies: [15545, 15520]

// Module 15556
import _mod15520 from "module_15520" /* 15520 */;
import module_15545 from "module_15545" /* 15545 */;

let _moduleResult = module_15545(_mod15520.document);
if (_moduleResult) {
  const _module1 = module_15545;
  _moduleResult = _module1(_mod15520.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15520.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
