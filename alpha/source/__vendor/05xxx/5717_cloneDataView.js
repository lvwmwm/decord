// Module ID: 5717
// Function ID: 5718
// Name: cloneDataView
// Dependencies: [5716]

// Module 5717 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5716 */;


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
