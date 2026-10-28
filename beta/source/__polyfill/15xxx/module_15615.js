// Module ID: 15615
// Function ID: 15616
// Dependencies: [15604, 15579]

// Module 15615
import _mod15579 from "module_15579" /* 15579 */;
import module_15604 from "module_15604" /* 15604 */;

let _moduleResult = module_15604(_mod15579.document);
if (_moduleResult) {
  const _module1 = module_15604;
  _moduleResult = _module1(_mod15579.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15579.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
