// Module ID: 5618
// Function ID: 5619
// Name: id
// Dependencies: []
// Exports: id

// Module 5618 (id)
let c0 = 0;

export const id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
