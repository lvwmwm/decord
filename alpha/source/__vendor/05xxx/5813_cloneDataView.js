// Module ID: 5813
// Function ID: 5814
// Name: cloneDataView
// Dependencies: [5812]

// Module 5813 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5812 */;


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
