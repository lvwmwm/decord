// Module ID: 4918
// Function ID: 4919
// Name: cloneArrayBuffer
// Dependencies: [652]

// Module 4918 (cloneArrayBuffer)
import _mod652 from "module_652" /* 652 */;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod652(constructor);
  const result = obj.set(new _mod652(byteLength));
  return constructor;
};
