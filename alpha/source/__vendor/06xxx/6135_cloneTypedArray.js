// Module ID: 6135
// Function ID: 6136
// Name: cloneTypedArray
// Dependencies: [6133]

// Module 6135 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 6133 */;


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
