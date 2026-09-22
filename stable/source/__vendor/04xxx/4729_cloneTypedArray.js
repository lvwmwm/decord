// Module ID: 4729
// Function ID: 4730
// Name: cloneTypedArray
// Dependencies: [4727]

// Module 4729 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4727 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
