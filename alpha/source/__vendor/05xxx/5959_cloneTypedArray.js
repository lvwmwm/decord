// Module ID: 5959
// Function ID: 5960
// Name: cloneTypedArray
// Dependencies: [5957]

// Module 5959 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5957 */;


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
