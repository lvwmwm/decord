// Module ID: 4475
// Function ID: 4476
// Name: cloneArrayBuffer
// Dependencies: [788]

// Module 4475 (cloneArrayBuffer)

export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new require(788)(constructor);
  const result = obj.set(new require(788)(byteLength));
  return constructor;
};
