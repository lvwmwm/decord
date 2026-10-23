// Module ID: 5775
// Function ID: 5776
// Name: cloneDataView
// Dependencies: [5774]

// Module 5775 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5774 */;


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
