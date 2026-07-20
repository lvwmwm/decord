// Module ID: 4249
// Function ID: 37263
// Name: cloneArrayBuffer
// Dependencies: []

// Module 4249 (cloneArrayBuffer)

export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  let tmp2 = require(dependencyMap[0]);
  tmp2 = new tmp2(constructor);
  let tmp3 = require(dependencyMap[0]);
  tmp3 = new tmp3(byteLength);
  const result = tmp2.set(tmp3);
  return constructor;
};
