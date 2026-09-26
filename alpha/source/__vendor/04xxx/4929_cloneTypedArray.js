// Module ID: 4929
// Function ID: 4930
// Name: cloneTypedArray
// Dependencies: [4927]

// Module 4929 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4927 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
