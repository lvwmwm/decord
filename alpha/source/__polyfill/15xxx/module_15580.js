// Module ID: 15580
// Function ID: 15581
// Dependencies: [15569, 15544]

// Module 15580
import _mod15544 from "module_15544" /* 15544 */;
import module_15569 from "module_15569" /* 15569 */;

let _moduleResult = module_15569(_mod15544.document);
if (_moduleResult) {
  const _module1 = module_15569;
  _moduleResult = _module1(_mod15544.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  let element;
  const tmp = c2;
  if (tmp) {
    const _document = _mod15544.document;
    element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
