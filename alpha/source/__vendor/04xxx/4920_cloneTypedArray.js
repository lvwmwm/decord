// Module ID: 4920
// Function ID: 4921
// Name: cloneTypedArray
// Dependencies: [4918]

// Module 4920 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4918 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
