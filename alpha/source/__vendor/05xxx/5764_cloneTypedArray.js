// Module ID: 5764
// Function ID: 5765
// Name: cloneTypedArray
// Dependencies: [5762]

// Module 5764 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5762 */;


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
