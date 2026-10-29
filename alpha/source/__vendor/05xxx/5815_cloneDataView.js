// Module ID: 5815
// Function ID: 5816
// Name: cloneDataView
// Dependencies: [5814]

// Module 5815 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5814 */;


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
