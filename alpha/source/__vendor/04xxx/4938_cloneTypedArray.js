// Module ID: 4938
// Function ID: 4939
// Name: cloneTypedArray
// Dependencies: [4936]

// Module 4938 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4936 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
