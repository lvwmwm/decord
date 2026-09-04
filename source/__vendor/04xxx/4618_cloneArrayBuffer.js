// Module ID: 4618
// Function ID: 4619
// Name: cloneArrayBuffer
// Dependencies: [785]

// Module 4618 (cloneArrayBuffer)
import _mod785 from "module_785" /* 785 */;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod785(constructor);
  const result = obj.set(new _mod785(byteLength));
  return constructor;
};
