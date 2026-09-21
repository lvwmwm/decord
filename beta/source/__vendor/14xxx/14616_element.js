// Module ID: 14616
// Function ID: 14617
// Name: element
// Dependencies: [14605, 14580]

// Module 14616 (element)
import _mod14580 from "module_14580" /* 14580 */;
import all from "module_14605" /* 14605 */;

let _moduleResult = all(_mod14580.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14580.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14580.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
