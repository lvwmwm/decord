// Module ID: 15775
// Function ID: 15776
// Dependencies: [15764, 15739]

// Module 15775
import _mod15739 from "module_15739" /* 15739 */;
import module_15764 from "module_15764" /* 15764 */;

let _moduleResult = module_15764(_mod15739.document);
if (_moduleResult) {
  const _module1 = module_15764;
  _moduleResult = _module1(_mod15739.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15739.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
