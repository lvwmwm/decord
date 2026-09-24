// Module ID: 14708
// Function ID: 14709
// Name: element
// Dependencies: [14697, 14672]

// Module 14708 (element)
import _mod14672 from "module_14672" /* 14672 */;
import all from "module_14697" /* 14697 */;

let _moduleResult = all(_mod14672.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14672.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14672.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
