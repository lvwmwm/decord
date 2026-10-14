// Module ID: 14946
// Function ID: 14947
// Dependencies: [14935, 14910]

// Module 14946
import _mod14910 from "module_14910" /* 14910 */;
import module_14935 from "module_14935" /* 14935 */;

let _moduleResult = module_14935(_mod14910.document);
if (_moduleResult) {
  const _module1 = module_14935;
  _moduleResult = _module1(_mod14910.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod14910.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
