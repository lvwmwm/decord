// Module ID: 4250
// Function ID: 37265
// Name: cloneDataView
// Dependencies: []

// Module 4250 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(dependencyMap[0])(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
