// Module ID: 5333
// Function ID: 45886
// Name: id
// Dependencies: []

// Module 5333 (id)
let closure_0 = 0;
arg5.id = function id() {
  const result = (closure_0 + 1) % Number.MAX_SAFE_INTEGER;
  closure_0 = result;
  return result;
};
