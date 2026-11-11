// Module ID: 6071
// Function ID: 6072
// Name: cloneDataView
// Dependencies: [6070]

// Module 6071 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 6070 */;


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
