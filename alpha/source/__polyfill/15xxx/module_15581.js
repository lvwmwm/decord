// Module ID: 15581
// Function ID: 15582
// Dependencies: [15570, 15545]

// Module 15581
import _mod15545 from "module_15545" /* 15545 */;
import module_15570 from "module_15570" /* 15570 */;

let _moduleResult = module_15570(_mod15545.document);
if (_moduleResult) {
  const _module1 = module_15570;
  _moduleResult = _module1(_mod15545.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15545.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
