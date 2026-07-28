// Module ID: 5371
// Function ID: 46043
// Name: id
// Dependencies: []

// Module 5371 (id)
let c0 = 0;
arg5.id = function id() {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
