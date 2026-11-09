// Module ID: 5956
// Function ID: 5957
// Name: cloneDataView
// Dependencies: [5955]

// Module 5956 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5955 */;


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
