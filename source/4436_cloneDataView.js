// Module ID: 4436
// Function ID: 4437
// Name: cloneDataView
// Dependencies: [4435]

// Module 4436 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(4435) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
