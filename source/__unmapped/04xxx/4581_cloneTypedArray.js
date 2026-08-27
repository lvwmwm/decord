// Module ID: 4581
// Function ID: 4582
// Name: cloneTypedArray
// Dependencies: [4579]

// Module 4581 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4579 */;


export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
