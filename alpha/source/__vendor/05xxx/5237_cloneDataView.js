// Module ID: 5237
// Function ID: 5238
// Name: cloneDataView
// Dependencies: [5236]

// Module 5237 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5236 */;


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
