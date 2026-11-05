// Module ID: 5965
// Function ID: 5966
// Name: cloneTypedArray
// Dependencies: [5963]

// Module 5965 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5963 */;


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
