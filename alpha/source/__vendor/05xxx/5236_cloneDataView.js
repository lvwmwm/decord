// Module ID: 5236
// Function ID: 5237
// Name: cloneDataView
// Dependencies: [5235]

// Module 5236 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5235 */;


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
