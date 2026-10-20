// Module ID: 5739
// Function ID: 5740
// Name: cloneTypedArray
// Dependencies: [5737]

// Module 5739 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5737 */;


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
