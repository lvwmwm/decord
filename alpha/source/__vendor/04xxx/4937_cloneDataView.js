// Module ID: 4937
// Function ID: 4938
// Name: cloneDataView
// Dependencies: [4936]

// Module 4937 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4936 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
