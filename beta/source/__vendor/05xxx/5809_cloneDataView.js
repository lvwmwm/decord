// Module ID: 5809
// Function ID: 5810
// Name: cloneDataView
// Dependencies: [5808]

// Module 5809 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5808 */;


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
