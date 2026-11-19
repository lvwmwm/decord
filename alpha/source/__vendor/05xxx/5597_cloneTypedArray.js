// Module ID: 5597
// Function ID: 5598
// Name: cloneTypedArray
// Dependencies: [5595]

// Module 5597 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5595 */;


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
