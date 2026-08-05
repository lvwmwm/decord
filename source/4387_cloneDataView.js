// Module ID: 4387
// Function ID: 4388
// Name: cloneDataView
// Dependencies: [4386]

// Module 4387 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(4386) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
