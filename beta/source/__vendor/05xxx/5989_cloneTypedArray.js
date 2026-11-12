// Module ID: 5989
// Function ID: 5990
// Name: cloneTypedArray
// Dependencies: [5987]

// Module 5989 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5987 */;


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
