// Module ID: 5839
// Function ID: 5840
// Name: id
// Dependencies: []

// Module 5839 (id)
let c0 = 0;
arg5.id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
