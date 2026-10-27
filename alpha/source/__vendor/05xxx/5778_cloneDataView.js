// Module ID: 5778
// Function ID: 5779
// Name: cloneDataView
// Dependencies: [5777]

// Module 5778 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5777 */;


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
