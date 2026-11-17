// Module ID: 6131
// Function ID: 6132
// Name: cloneDataView
// Dependencies: [6130]

// Module 6131 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 6130 */;


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
