// Module ID: 5788
// Function ID: 5789
// Name: id
// Dependencies: []
// Exports: id

// Module 5788 (id)
let c0 = 0;

export const id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
