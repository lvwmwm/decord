// Module ID: 4653
// Function ID: 4654
// Name: cloneTypedArray
// Dependencies: [4651]

// Module 4653 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4651 */;


export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
