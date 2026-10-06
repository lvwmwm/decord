// Module ID: 4930
// Function ID: 4931
// Name: cloneTypedArray
// Dependencies: [4928]

// Module 4930 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4928 */;


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
