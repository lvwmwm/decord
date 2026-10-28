// Module ID: 5810
// Function ID: 5811
// Name: cloneTypedArray
// Dependencies: [5808]

// Module 5810 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5808 */;


export default function cloneTypedArray(buffer, arg1) {
  const tmp = arg1;
  if (tmp) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
