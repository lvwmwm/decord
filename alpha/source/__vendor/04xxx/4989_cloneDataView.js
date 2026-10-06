// Module ID: 4989
// Function ID: 4990
// Name: cloneDataView
// Dependencies: [4988]

// Module 4989 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4988 */;


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
