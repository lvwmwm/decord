// Module ID: 4848
// Function ID: 4849
// Name: cloneDataView
// Dependencies: [4847]

// Module 4848 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4847 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
