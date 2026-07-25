// Module ID: 4259
// Function ID: 37373
// Name: cloneDataView
// Dependencies: [4258]

// Module 4259 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(4258) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
