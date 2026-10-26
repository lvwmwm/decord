// Module ID: 5778
// Function ID: 5779
// Name: cloneTypedArray
// Dependencies: [5776]

// Module 5778 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5776 */;


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
