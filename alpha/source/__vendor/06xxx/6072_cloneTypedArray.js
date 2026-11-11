// Module ID: 6072
// Function ID: 6073
// Name: cloneTypedArray
// Dependencies: [6070]

// Module 6072 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 6070 */;


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
