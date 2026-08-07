// Module ID: 4434
// Function ID: 4435
// Name: cloneDataView
// Dependencies: [4433]

// Module 4434 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(4433) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
