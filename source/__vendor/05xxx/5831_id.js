// Module ID: 5831
// Function ID: 5832
// Name: id
// Dependencies: []

// Module 5831 (id)
let c0 = 0;
arg5.id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
