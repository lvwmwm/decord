// Module ID: 5237
// Function ID: 5238
// Name: cloneTypedArray
// Dependencies: [5235]

// Module 5237 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5235 */;


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
