// Module ID: 4418
// Function ID: 4419
// Name: cloneTypedArray
// Dependencies: [4416]

// Module 4418 (cloneTypedArray)

export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = require(4416) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
