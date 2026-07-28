// Module ID: 4294
// Function ID: 37488
// Name: cloneTypedArray
// Dependencies: [4292]

// Module 4294 (cloneTypedArray)

export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = require(4292) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
