// Module ID: 4851
// Function ID: 4852
// Name: cloneTypedArray
// Dependencies: [4849]

// Module 4851 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4849 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
