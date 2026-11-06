// Module ID: 5983
// Function ID: 5984
// Name: cloneDataView
// Dependencies: [5982]

// Module 5983 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5982 */;


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
