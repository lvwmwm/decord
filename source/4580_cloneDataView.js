// Module ID: 4580
// Function ID: 4581
// Name: cloneDataView
// Dependencies: [4579]

// Module 4580 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4579 */;


export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
