// Module ID: 5816
// Function ID: 5817
// Name: cloneTypedArray
// Dependencies: [5814]

// Module 5816 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5814 */;


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
