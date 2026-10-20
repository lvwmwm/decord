// Module ID: 5738
// Function ID: 5739
// Name: cloneDataView
// Dependencies: [5737]

// Module 5738 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5737 */;


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
