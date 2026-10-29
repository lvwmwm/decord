// Module ID: 16079
// Function ID: 16080
// Dependencies: [16068, 16043]

// Module 16079
import _mod16043 from "module_16043" /* 16043 */;
import module_16068 from "module_16068" /* 16068 */;

let _moduleResult = module_16068(_mod16043.document);
if (_moduleResult) {
  const _module1 = module_16068;
  _moduleResult = _module1(_mod16043.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod16043.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
