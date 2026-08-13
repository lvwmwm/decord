// Module ID: 4476
// Function ID: 4477
// Name: cloneArrayBuffer
// Dependencies: [788]

// Module 4476 (cloneArrayBuffer)

export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new require(788)(constructor);
  const result = obj.set(new require(788)(byteLength));
  return constructor;
};
