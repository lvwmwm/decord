// Module ID: 5173
// Function ID: 5174
// Name: cloneDataView
// Dependencies: [5172]

// Module 5173 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5172 */;


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
