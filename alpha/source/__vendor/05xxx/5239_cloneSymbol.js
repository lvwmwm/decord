// Module ID: 5239
// Function ID: 5240
// Name: cloneSymbol
// Dependencies: [523]

// Module 5239 (cloneSymbol)
import _mod523 from "module_523" /* 523 */;

let prototype;
if (_mod523) {
  prototype = _mod523.prototype;
}
let valueOf;
if (prototype) {
  valueOf = prototype.valueOf;
}

export default function cloneSymbol(arg0) {
  let ObjectResult;
  if (valueOf) {
    ObjectResult = Object(obj.call(arg0));
  } else {
    ObjectResult = {};
  }
  return ObjectResult;
};
