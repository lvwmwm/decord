// Module ID: 4882
// Function ID: 4883
// Name: cloneDataView
// Dependencies: [4881]

// Module 4882 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4881 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
