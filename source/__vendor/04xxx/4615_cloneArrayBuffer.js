// Module ID: 4615
// Function ID: 4616
// Name: cloneArrayBuffer
// Dependencies: [788]

// Module 4615 (cloneArrayBuffer)
import _mod788 from "module_788" /* 788 */;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod788(constructor);
  const result = obj.set(new _mod788(byteLength));
  return constructor;
};
