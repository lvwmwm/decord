// Module ID: 5776
// Function ID: 5777
// Name: cloneTypedArray
// Dependencies: [5774]

// Module 5776 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5774 */;


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
