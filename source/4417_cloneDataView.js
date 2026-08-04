// Module ID: 4417
// Function ID: 4418
// Name: cloneDataView
// Dependencies: [4416]

// Module 4417 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(4416) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
