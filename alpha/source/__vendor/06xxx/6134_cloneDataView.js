// Module ID: 6134
// Function ID: 6135
// Name: cloneDataView
// Dependencies: [6133]

// Module 6134 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 6133 */;


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
