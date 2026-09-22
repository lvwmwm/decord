// Module ID: 14422
// Function ID: 14423
// Name: element
// Dependencies: [14411, 14386]

// Module 14422 (element)
import _mod14386 from "module_14386" /* 14386 */;
import all from "module_14411" /* 14411 */;

let _moduleResult = all(_mod14386.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14386.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14386.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
