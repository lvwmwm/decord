// Module ID: 4582
// Function ID: 4583
// Name: cloneDataView
// Dependencies: [4581]

// Module 4582 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4581 */;


export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
