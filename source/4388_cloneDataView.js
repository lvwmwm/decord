// Module ID: 4388
// Function ID: 4389
// Name: cloneDataView
// Dependencies: [4387]

// Module 4388 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(4387) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
