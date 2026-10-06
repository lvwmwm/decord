// Module ID: 4928
// Function ID: 4929
// Name: cloneArrayBuffer
// Dependencies: [664]

// Module 4928 (cloneArrayBuffer)
import _mod664 from "module_664" /* 664 */;

let set;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  set = new _mod664(constructor).set;
  const tmp3 = new _mod664(byteLength);
  const result = set(tmp3);
  return constructor;
};
