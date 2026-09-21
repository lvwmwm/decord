// Module ID: 4850
// Function ID: 4851
// Name: cloneDataView
// Dependencies: [4849]

// Module 4850 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4849 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
