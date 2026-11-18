// Module ID: 5627
// Function ID: 5628
// Name: cloneDataView
// Dependencies: [5626]

// Module 5627 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5626 */;


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
