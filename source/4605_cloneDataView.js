// Module ID: 4605
// Function ID: 4606
// Name: cloneDataView
// Dependencies: [4604]

// Module 4605 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(4604) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
