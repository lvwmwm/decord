// Module ID: 5180
// Function ID: 5181
// Name: cloneTypedArray
// Dependencies: [5178]

// Module 5180 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5178 */;


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
