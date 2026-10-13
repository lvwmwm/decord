// Module ID: 14908
// Function ID: 14909
// Dependencies: [14897, 14872]

// Module 14908
import _mod14872 from "module_14872" /* 14872 */;
import module_14897 from "module_14897" /* 14897 */;

let _moduleResult = module_14897(_mod14872.document);
if (_moduleResult) {
  const _module1 = module_14897;
  _moduleResult = _module1(_mod14872.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod14872.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
