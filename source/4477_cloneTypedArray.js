// Module ID: 4477
// Function ID: 4478
// Name: cloneTypedArray
// Dependencies: [4475]

// Module 4477 (cloneTypedArray)

export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = require(4475) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
