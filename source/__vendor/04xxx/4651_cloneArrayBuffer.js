// Module ID: 4651
// Function ID: 4652
// Name: cloneArrayBuffer
// Dependencies: [652]

// Module 4651 (cloneArrayBuffer)
import _mod652 from "module_652" /* 652 */;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod652(constructor);
  const result = obj.set(new _mod652(byteLength));
  return constructor;
};
