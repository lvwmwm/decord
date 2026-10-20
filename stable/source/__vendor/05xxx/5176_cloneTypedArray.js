// Module ID: 5176
// Function ID: 5177
// Name: cloneTypedArray
// Dependencies: [5174]

// Module 5176 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5174 */;


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
