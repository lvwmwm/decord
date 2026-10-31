// Module ID: 5828
// Function ID: 5829
// Name: cloneTypedArray
// Dependencies: [5826]

// Module 5828 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5826 */;


export default function cloneTypedArray(buffer, arg1) {
  const tmp = arg1;
  if (tmp) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
