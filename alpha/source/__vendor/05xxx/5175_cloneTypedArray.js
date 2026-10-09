// Module ID: 5175
// Function ID: 5176
// Name: cloneTypedArray
// Dependencies: [5173]

// Module 5175 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5173 */;


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
