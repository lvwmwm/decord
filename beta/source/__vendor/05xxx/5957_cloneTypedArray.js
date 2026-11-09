// Module ID: 5957
// Function ID: 5958
// Name: cloneTypedArray
// Dependencies: [5955]

// Module 5957 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5955 */;


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
