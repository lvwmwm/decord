// Module ID: 14592
// Function ID: 14593
// Dependencies: [14581, 14556]

// Module 14592
import _mod14556 from "module_14556" /* 14556 */;
import module_14581 from "module_14581" /* 14581 */;

let _moduleResult = module_14581(_mod14556.document);
if (_moduleResult) {
  const _module1 = module_14581;
  _moduleResult = _module1(_mod14556.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod14556.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
