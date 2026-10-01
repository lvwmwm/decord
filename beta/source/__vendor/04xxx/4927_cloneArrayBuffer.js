// Module ID: 4927
// Function ID: 4928
// Name: cloneArrayBuffer
// Dependencies: [652]

// Module 4927 (cloneArrayBuffer)
import _mod652 from "module_652" /* 652 */;

let set;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  set = new _mod652(constructor).set;
  const tmp3 = new _mod652(byteLength);
  const result = set(tmp3);
  return constructor;
};
