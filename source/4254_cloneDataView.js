// Module ID: 4254
// Function ID: 37321
// Name: cloneDataView
// Dependencies: []

// Module 4254 (cloneDataView)

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(dependencyMap[0])(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
