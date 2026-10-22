// Module ID: 5763
// Function ID: 5764
// Name: cloneDataView
// Dependencies: [5762]

// Module 5763 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5762 */;


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
