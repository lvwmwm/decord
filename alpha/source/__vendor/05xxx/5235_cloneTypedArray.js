// Module ID: 5235
// Function ID: 5236
// Name: cloneTypedArray
// Dependencies: [5233]

// Module 5235 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5233 */;


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
