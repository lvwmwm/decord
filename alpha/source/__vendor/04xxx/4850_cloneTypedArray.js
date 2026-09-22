// Module ID: 4850
// Function ID: 4851
// Name: cloneTypedArray
// Dependencies: [4848]

// Module 4850 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4848 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
