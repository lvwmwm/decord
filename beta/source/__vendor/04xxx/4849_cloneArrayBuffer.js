// Module ID: 4849
// Function ID: 4850
// Name: cloneArrayBuffer
// Dependencies: [656]

// Module 4849 (cloneArrayBuffer)
import _mod656 from "module_656" /* 656 */;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod656(constructor);
  const result = obj.set(new _mod656(byteLength));
  return constructor;
};
