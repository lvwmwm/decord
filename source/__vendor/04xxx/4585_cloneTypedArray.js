// Module ID: 4585
// Function ID: 4586
// Name: cloneTypedArray
// Dependencies: [4583]

// Module 4585 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4583 */;


export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
