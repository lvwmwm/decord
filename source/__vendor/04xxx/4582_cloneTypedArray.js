// Module ID: 4582
// Function ID: 4583
// Name: cloneTypedArray
// Dependencies: [4580]

// Module 4582 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4580 */;


export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
