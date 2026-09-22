// Module ID: 4849
// Function ID: 4850
// Name: cloneDataView
// Dependencies: [4848]

// Module 4849 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4848 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
