// Module ID: 5780
// Function ID: 5781
// Name: cloneDataView
// Dependencies: [5779]

// Module 5780 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5779 */;


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
