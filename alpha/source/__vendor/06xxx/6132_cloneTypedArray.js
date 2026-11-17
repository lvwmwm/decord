// Module ID: 6132
// Function ID: 6133
// Name: cloneTypedArray
// Dependencies: [6130]

// Module 6132 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 6130 */;


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
