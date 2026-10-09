// Module ID: 5174
// Function ID: 5175
// Name: cloneDataView
// Dependencies: [5173]

// Module 5174 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5173 */;


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
