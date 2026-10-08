// Module ID: 14414
// Function ID: 14415
// Dependencies: [14403, 14378]

// Module 14414
import _mod14378 from "module_14378" /* 14378 */;
import module_14403 from "module_14403" /* 14403 */;

let _moduleResult = module_14403(_mod14378.document);
if (_moduleResult) {
  const _module1 = module_14403;
  _moduleResult = _module1(_mod14378.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod14378.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
