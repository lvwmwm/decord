// Module ID: 5488
// Function ID: 5489
// Name: id
// Dependencies: []

// Module 5488 (id)
let c0 = 0;
arg5.id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
