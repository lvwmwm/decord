// Module ID: 4620
// Function ID: 4621
// Name: cloneTypedArray
// Dependencies: [4618]

// Module 4620 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4618 */;


export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
