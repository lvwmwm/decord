// Module ID: 4293
// Function ID: 37486
// Name: cloneDataView
// Dependencies: [4292]

// Module 4293 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(4292) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
