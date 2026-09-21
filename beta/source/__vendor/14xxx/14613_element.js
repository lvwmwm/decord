// Module ID: 14613
// Function ID: 14614
// Name: element
// Dependencies: [14602, 14577]

// Module 14613 (element)
import _mod14577 from "module_14577" /* 14577 */;
import all from "module_14602" /* 14602 */;

let _moduleResult = all(_mod14577.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14577.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14577.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
