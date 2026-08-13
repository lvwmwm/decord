// Module ID: 4477
// Function ID: 4478
// Name: cloneDataView
// Dependencies: [4476]

// Module 4477 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(4476) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
