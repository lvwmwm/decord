// Module ID: 4257
// Function ID: 37359
// Name: cloneArrayBuffer
// Dependencies: [765]

// Module 4257 (cloneArrayBuffer)

export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  let tmp2 = require(765);
  tmp2 = new tmp2(constructor);
  let tmp3 = require(765);
  tmp3 = new tmp3(byteLength);
  const result = tmp2.set(tmp3);
  return constructor;
};
