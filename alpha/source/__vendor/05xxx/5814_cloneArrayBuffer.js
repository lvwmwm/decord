// Module ID: 5814
// Function ID: 5815
// Name: cloneArrayBuffer
// Dependencies: [663]

// Module 5814 (cloneArrayBuffer)
import _mod663 from "module_663" /* 663 */;

let set;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  set = new _mod663(constructor).set;
  const tmp3 = new _mod663(byteLength);
  const result = set(tmp3);
  return constructor;
};
