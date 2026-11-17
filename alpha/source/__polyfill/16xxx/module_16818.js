// Module ID: 16818
// Function ID: 16819
// Dependencies: [16807, 16782]

// Module 16818
import _mod16782 from "module_16782" /* 16782 */;
import module_16807 from "module_16807" /* 16807 */;

let _moduleResult = module_16807(_mod16782.document);
if (_moduleResult) {
  const _module1 = module_16807;
  _moduleResult = _module1(_mod16782.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16782.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
