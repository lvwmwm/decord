// Module ID: 14619
// Function ID: 14620
// Name: element
// Dependencies: [14608, 14583]

// Module 14619 (element)
import _mod14583 from "module_14583" /* 14583 */;
import all from "module_14608" /* 14608 */;

let _moduleResult = all(_mod14583.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14583.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14583.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
