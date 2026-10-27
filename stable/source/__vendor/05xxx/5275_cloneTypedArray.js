// Module ID: 5275
// Function ID: 5276
// Name: cloneTypedArray
// Dependencies: [5273]

// Module 5275 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5273 */;


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
