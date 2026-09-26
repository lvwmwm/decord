// Module ID: 4881
// Function ID: 4882
// Name: cloneTypedArray
// Dependencies: [4879]

// Module 4881 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4879 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
