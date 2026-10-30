// Module ID: 5823
// Function ID: 5824
// Name: cloneTypedArray
// Dependencies: [5821]

// Module 5823 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5821 */;


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
