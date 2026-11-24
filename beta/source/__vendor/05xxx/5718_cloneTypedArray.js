// Module ID: 5718
// Function ID: 5719
// Name: cloneTypedArray
// Dependencies: [5716]

// Module 5718 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5716 */;


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
