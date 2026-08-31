// Module ID: 5799
// Function ID: 5800
// Name: id
// Dependencies: []

// Module 5799 (id)
let c0 = 0;
arg5.id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
