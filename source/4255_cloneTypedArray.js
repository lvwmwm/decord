// Module ID: 4255
// Function ID: 37331
// Name: cloneTypedArray
// Dependencies: []

// Module 4255 (cloneTypedArray)

export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = require(dependencyMap[0])(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
