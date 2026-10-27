// Module ID: 5274
// Function ID: 5275
// Name: cloneDataView
// Dependencies: [5273]

// Module 5274 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5273 */;


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
