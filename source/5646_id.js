// Module ID: 5646
// Function ID: 5647
// Name: id
// Dependencies: []

// Module 5646 (id)
let c0 = 0;
arg5.id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
