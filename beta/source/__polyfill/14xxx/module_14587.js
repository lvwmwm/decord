// Module ID: 14587
// Function ID: 14588
// Dependencies: [14576, 14551]

// Module 14587
import _mod14551 from "module_14551" /* 14551 */;
import module_14576 from "module_14576" /* 14576 */;

let _moduleResult = module_14576(_mod14551.document);
if (_moduleResult) {
  const _module1 = module_14576;
  _moduleResult = _module1(_mod14551.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod14551.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
