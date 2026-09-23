// Module ID: 4919
// Function ID: 4920
// Name: cloneDataView
// Dependencies: [4918]

// Module 4919 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4918 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
