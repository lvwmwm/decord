// Module ID: 5474
// Function ID: 5475
// Name: id
// Dependencies: []
// Exports: id

// Module 5474 (id)
let c0 = 0;

export const id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
