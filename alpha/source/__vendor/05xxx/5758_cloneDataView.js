// Module ID: 5758
// Function ID: 5759
// Name: cloneDataView
// Dependencies: [5757]

// Module 5758 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5757 */;


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
