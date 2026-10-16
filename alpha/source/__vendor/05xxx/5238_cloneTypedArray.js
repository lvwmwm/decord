// Module ID: 5238
// Function ID: 5239
// Name: cloneTypedArray
// Dependencies: [5236]

// Module 5238 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5236 */;


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
