// Module ID: 14259
// Function ID: 14260
// Name: element
// Dependencies: [14248, 14223]

// Module 14259 (element)
import _mod14223 from "module_14223" /* 14223 */;
import all from "all" /* 14248 */;

let _moduleResult = all(_mod14223.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14223.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod14223.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
