// Module ID: 14115
// Function ID: 14116
// Dependencies: [14104, 14079]

// Module 14115
import _mod14079 from "module_14079" /* 14079 */;
import module_14104 from "module_14104" /* 14104 */;

let _moduleResult = module_14104(_mod14079.document);
if (_moduleResult) {
  const _module1 = module_14104;
  _moduleResult = _module1(_mod14079.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod14079.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
