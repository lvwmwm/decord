// Module ID: 4619
// Function ID: 4620
// Name: cloneDataView
// Dependencies: [4618]

// Module 4619 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4618 */;


export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
