// Module ID: 4616
// Function ID: 4617
// Name: cloneDataView
// Dependencies: [4615]

// Module 4616 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4615 */;


export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
