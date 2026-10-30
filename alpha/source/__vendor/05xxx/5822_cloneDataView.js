// Module ID: 5822
// Function ID: 5823
// Name: cloneDataView
// Dependencies: [5821]

// Module 5822 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5821 */;


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
