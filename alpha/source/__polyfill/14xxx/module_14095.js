// Module ID: 14095
// Function ID: 14096
// Dependencies: [14084, 14059]

// Module 14095
import _mod14059 from "module_14059" /* 14059 */;
import module_14084 from "module_14084" /* 14084 */;

let _moduleResult = module_14084(_mod14059.document);
if (_moduleResult) {
  const _module1 = module_14084;
  _moduleResult = _module1(_mod14059.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod14059.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
