// Module ID: 15451
// Function ID: 15452
// Dependencies: [15440, 15415]

// Module 15451
import _mod15415 from "module_15415" /* 15415 */;
import module_15440 from "module_15440" /* 15440 */;

let _moduleResult = module_15440(_mod15415.document);
if (_moduleResult) {
  const _module1 = module_15440;
  _moduleResult = _module1(_mod15415.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15415.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
