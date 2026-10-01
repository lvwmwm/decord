// Module ID: 6438
// Function ID: 6439
// Name: id
// Dependencies: []
// Exports: id

// Module 6438 (id)
let c0 = 0;

export const id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
