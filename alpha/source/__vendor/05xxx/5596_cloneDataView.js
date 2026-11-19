// Module ID: 5596
// Function ID: 5597
// Name: cloneDataView
// Dependencies: [5595]

// Module 5596 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5595 */;


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
