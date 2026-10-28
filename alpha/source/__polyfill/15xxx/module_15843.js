// Module ID: 15843
// Function ID: 15844
// Dependencies: [15832, 15807]

// Module 15843
import _mod15807 from "module_15807" /* 15807 */;
import module_15832 from "module_15832" /* 15832 */;

let _moduleResult = module_15832(_mod15807.document);
if (_moduleResult) {
  const _module1 = module_15832;
  _moduleResult = _module1(_mod15807.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15807.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
