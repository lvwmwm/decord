// Module ID: 5111
// Function ID: 43468
// Name: id
// Dependencies: []

// Module 5111 (id)
let closure_0 = 0;
arg5.id = function id() {
  const result = (closure_0 + 1) % Number.MAX_SAFE_INTEGER;
  closure_0 = result;
  return result;
};
