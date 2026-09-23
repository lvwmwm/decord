// Module ID: 7162
// Function ID: 7163
// Name: id
// Dependencies: []
// Exports: id

// Module 7162 (id)
let c0 = 0;

export const id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
