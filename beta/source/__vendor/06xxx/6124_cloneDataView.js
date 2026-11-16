// Module ID: 6124
// Function ID: 6125
// Name: cloneDataView
// Dependencies: [6123]

// Module 6124 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 6123 */;


export default function cloneDataView(buffer, arg1) {
  const tmp = arg1;
  if (tmp) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
