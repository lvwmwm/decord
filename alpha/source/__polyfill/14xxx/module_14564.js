// Module ID: 14564
// Function ID: 14565
// Dependencies: [14553, 14528]

// Module 14564
import _mod14528 from "module_14528" /* 14528 */;
import module_14553 from "module_14553" /* 14553 */;

let _moduleResult = module_14553(_mod14528.document);
if (_moduleResult) {
  const _module1 = module_14553;
  _moduleResult = _module1(_mod14528.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod14528.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
