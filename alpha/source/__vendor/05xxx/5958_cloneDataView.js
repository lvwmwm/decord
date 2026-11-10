// Module ID: 5958
// Function ID: 5959
// Name: cloneDataView
// Dependencies: [5957]

// Module 5958 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5957 */;


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
