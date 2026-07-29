// Module ID: 4322
// Function ID: 4323
// Name: cloneDataView
// Dependencies: [4321]

// Module 4322 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(4321) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
