// Module ID: 5961
// Function ID: 5962
// Name: cloneDataView
// Dependencies: [5960]

// Module 5961 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5960 */;


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
