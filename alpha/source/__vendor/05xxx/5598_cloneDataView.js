// Module ID: 5598
// Function ID: 5599
// Name: cloneDataView
// Dependencies: [5597]

// Module 5598 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5597 */;


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
