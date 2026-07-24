// Module ID: 5336
// Function ID: 45910
// Name: id
// Dependencies: []

// Module 5336 (id)
let c0 = 0;
arg5.id = function id() {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
