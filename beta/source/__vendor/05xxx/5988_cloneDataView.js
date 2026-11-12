// Module ID: 5988
// Function ID: 5989
// Name: cloneDataView
// Dependencies: [5987]

// Module 5988 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5987 */;


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
