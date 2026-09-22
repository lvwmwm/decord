// Module ID: 7078
// Function ID: 7079
// Name: id
// Dependencies: []
// Exports: id

// Module 7078 (id)
let c0 = 0;

export const id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
