// Module ID: 16506
// Function ID: 16507
// Dependencies: [16495, 16470]

// Module 16506
import _mod16470 from "module_16470" /* 16470 */;
import module_16495 from "module_16495" /* 16495 */;

let _moduleResult = module_16495(_mod16470.document);
if (_moduleResult) {
  const _module1 = module_16495;
  _moduleResult = _module1(_mod16470.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16470.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
