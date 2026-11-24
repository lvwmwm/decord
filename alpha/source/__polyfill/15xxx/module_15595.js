// Module ID: 15595
// Function ID: 15596
// Dependencies: [15584, 15559]

// Module 15595
import _mod15559 from "module_15559" /* 15559 */;
import module_15584 from "module_15584" /* 15584 */;

let _moduleResult = module_15584(_mod15559.document);
if (_moduleResult) {
  const _module1 = module_15584;
  _moduleResult = _module1(_mod15559.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15559.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
