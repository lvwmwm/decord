// Module ID: 14654
// Function ID: 14655
// Name: element
// Dependencies: [14643, 14618]

// Module 14654 (element)
import _mod14618 from "module_14618" /* 14618 */;
import all from "module_14643" /* 14643 */;

let _moduleResult = all(_mod14618.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14618.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14618.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
