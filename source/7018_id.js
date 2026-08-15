// Module ID: 7018
// Function ID: 7019
// Name: id
// Dependencies: []

// Module 7018 (id)
let c0 = 0;
arg5.id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
