// Module ID: 4990
// Function ID: 4991
// Name: cloneTypedArray
// Dependencies: [4988]

// Module 4990 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4988 */;


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
