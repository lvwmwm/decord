// Module ID: 4984
// Function ID: 4985
// Name: cloneTypedArray
// Dependencies: [4982]

// Module 4984 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4982 */;


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
