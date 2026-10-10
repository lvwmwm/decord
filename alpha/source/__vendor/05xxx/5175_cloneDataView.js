// Module ID: 5175
// Function ID: 5176
// Name: cloneDataView
// Dependencies: [5174]

// Module 5175 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5174 */;


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
