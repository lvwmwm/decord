// Module ID: 5459
// Function ID: 5460
// Name: id
// Dependencies: []

// Module 5459 (id)
let c0 = 0;
arg5.id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
