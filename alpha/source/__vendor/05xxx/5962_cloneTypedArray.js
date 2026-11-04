// Module ID: 5962
// Function ID: 5963
// Name: cloneTypedArray
// Dependencies: [5960]

// Module 5962 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5960 */;


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
