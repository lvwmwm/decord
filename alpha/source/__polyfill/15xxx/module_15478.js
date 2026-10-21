// Module ID: 15478
// Function ID: 15479
// Dependencies: [15467, 15442]

// Module 15478
import _mod15442 from "module_15442" /* 15442 */;
import module_15467 from "module_15467" /* 15467 */;

let _moduleResult = module_15467(_mod15442.document);
if (_moduleResult) {
  const _module1 = module_15467;
  _moduleResult = _module1(_mod15442.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15442.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
