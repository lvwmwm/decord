// Module ID: 4929
// Function ID: 4930
// Name: cloneDataView
// Dependencies: [4928]

// Module 4929 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4928 */;


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
