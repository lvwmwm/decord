// Module ID: 5781
// Function ID: 5782
// Name: cloneTypedArray
// Dependencies: [5779]

// Module 5781 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5779 */;


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
