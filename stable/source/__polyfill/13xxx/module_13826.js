// Module ID: 13826
// Function ID: 13827
// Dependencies: [13815, 13790]

// Module 13826
import _mod13790 from "module_13790" /* 13790 */;
import module_13815 from "module_13815" /* 13815 */;

let _moduleResult = module_13815(_mod13790.document);
if (_moduleResult) {
  const _module1 = module_13815;
  _moduleResult = _module1(_mod13790.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod13790.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
