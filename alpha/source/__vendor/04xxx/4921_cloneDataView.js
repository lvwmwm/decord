// Module ID: 4921
// Function ID: 4922
// Name: cloneDataView
// Dependencies: [4920]

// Module 4921 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4920 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
