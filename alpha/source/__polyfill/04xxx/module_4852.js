// Module ID: 4852
// Function ID: 4853
// Dependencies: [523]

// Module 4852
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
  if (valueOf) {
    const call = tmp.call;
    Object(typeof call === "unknown" ? tmp() : call(arg0));
  } else {
    return {};
  }
};
