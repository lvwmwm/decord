// Module ID: 5875
// Function ID: 5876
// Name: cloneDataView
// Dependencies: [5874]

// Module 5875 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5874 */;


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
