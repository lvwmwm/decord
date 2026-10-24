// Module ID: 5777
// Function ID: 5778
// Name: cloneDataView
// Dependencies: [5776]

// Module 5777 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5776 */;


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
