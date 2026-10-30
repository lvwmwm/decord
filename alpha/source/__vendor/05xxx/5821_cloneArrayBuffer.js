// Module ID: 5821
// Function ID: 5822
// Name: cloneArrayBuffer
// Dependencies: [651]

// Module 5821 (cloneArrayBuffer)
import _mod651 from "module_651" /* 651 */;

let set;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  set = new _mod651(constructor).set;
  const tmp3 = new _mod651(byteLength);
  const result = set(tmp3);
  return constructor;
};
