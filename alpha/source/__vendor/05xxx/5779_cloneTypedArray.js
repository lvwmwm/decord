// Module ID: 5779
// Function ID: 5780
// Name: cloneTypedArray
// Dependencies: [5777]

// Module 5779 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5777 */;


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
