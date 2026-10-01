// Module ID: 14028
// Function ID: 14029
// Name: element
// Dependencies: [14017, 13992]

// Module 14028 (element)
import _mod13992 from "module_13992" /* 13992 */;
import all from "module_14017" /* 14017 */;

let _moduleResult = all(_mod13992.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13992.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod13992.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
