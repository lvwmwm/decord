// Module ID: 5174
// Function ID: 5175
// Name: cloneTypedArray
// Dependencies: [5172]

// Module 5174 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5172 */;


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
