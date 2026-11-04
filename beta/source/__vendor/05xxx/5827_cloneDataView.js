// Module ID: 5827
// Function ID: 5828
// Name: cloneDataView
// Dependencies: [5826]

// Module 5827 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5826 */;


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
