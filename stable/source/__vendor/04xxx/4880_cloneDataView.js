// Module ID: 4880
// Function ID: 4881
// Name: cloneDataView
// Dependencies: [4879]

// Module 4880 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4879 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
