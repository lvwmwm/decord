// Module ID: 14097
// Function ID: 14098
// Dependencies: [14086, 14061]

// Module 14097
import _mod14061 from "module_14061" /* 14061 */;
import module_14086 from "module_14086" /* 14086 */;

let _moduleResult = module_14086(_mod14061.document);
if (_moduleResult) {
  const _module1 = module_14086;
  _moduleResult = _module1(_mod14061.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod14061.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
