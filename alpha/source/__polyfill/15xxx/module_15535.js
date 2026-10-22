// Module ID: 15535
// Function ID: 15536
// Dependencies: [15524, 15499]

// Module 15535
import _mod15499 from "module_15499" /* 15499 */;
import module_15524 from "module_15524" /* 15524 */;

let _moduleResult = module_15524(_mod15499.document);
if (_moduleResult) {
  const _module1 = module_15524;
  _moduleResult = _module1(_mod15499.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15499.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
