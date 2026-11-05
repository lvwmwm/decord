// Module ID: 5964
// Function ID: 5965
// Name: cloneDataView
// Dependencies: [5963]

// Module 5964 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5963 */;


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
