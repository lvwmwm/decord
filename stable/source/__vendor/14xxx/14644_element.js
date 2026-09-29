// Module ID: 14644
// Function ID: 14645
// Name: element
// Dependencies: [14633, 14608]

// Module 14644 (element)
import _mod14608 from "module_14608" /* 14608 */;
import all from "module_14633" /* 14633 */;

let _moduleResult = all(_mod14608.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14608.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14608.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
