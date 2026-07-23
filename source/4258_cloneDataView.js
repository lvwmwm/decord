// Module ID: 4258
// Function ID: 37361
// Name: cloneDataView
// Dependencies: [4257]

// Module 4258 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(4257) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
