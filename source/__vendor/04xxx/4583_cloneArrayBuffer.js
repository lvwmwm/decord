// Module ID: 4583
// Function ID: 4584
// Name: cloneArrayBuffer
// Dependencies: [788]

// Module 4583 (cloneArrayBuffer)
import _mod788 from "module_788" /* 788 */;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod788(constructor);
  const result = obj.set(new _mod788(byteLength));
  return constructor;
};
