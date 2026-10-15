// Module ID: 5234
// Function ID: 5235
// Name: cloneDataView
// Dependencies: [5233]

// Module 5234 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5233 */;


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
