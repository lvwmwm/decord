// Module ID: 6125
// Function ID: 6126
// Name: cloneTypedArray
// Dependencies: [6123]

// Module 6125 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 6123 */;


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
