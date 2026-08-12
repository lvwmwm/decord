// Module ID: 4476
// Function ID: 4477
// Name: cloneDataView
// Dependencies: [4475]

// Module 4476 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(4475) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
