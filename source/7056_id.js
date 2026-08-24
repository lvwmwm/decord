// Module ID: 7056
// Function ID: 7057
// Name: id
// Dependencies: []

// Module 7056 (id)
let c0 = 0;
arg5.id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
