// Module ID: 4728
// Function ID: 4729
// Name: cloneDataView
// Dependencies: [4727]

// Module 4728 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4727 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
