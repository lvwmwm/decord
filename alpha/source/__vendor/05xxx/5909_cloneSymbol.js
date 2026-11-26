// Module ID: 5909
// Function ID: 5910
// Name: cloneSymbol
// Dependencies: [523]

// Module 5909 (cloneSymbol)
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
