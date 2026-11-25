// Module ID: 5876
// Function ID: 5877
// Name: cloneTypedArray
// Dependencies: [5874]

// Module 5876 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5874 */;


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
