// Module ID: 5179
// Function ID: 5180
// Name: cloneDataView
// Dependencies: [5178]

// Module 5179 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5178 */;


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
