// Module ID: 15576
// Function ID: 15577
// Dependencies: [15565, 15540]

// Module 15576
import _mod15540 from "module_15540" /* 15540 */;
import module_15565 from "module_15565" /* 15565 */;

let _moduleResult = module_15565(_mod15540.document);
if (_moduleResult) {
  const _module1 = module_15565;
  _moduleResult = _module1(_mod15540.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15540.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
