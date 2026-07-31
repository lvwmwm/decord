// Module ID: 5397
// Function ID: 5398
// Name: id
// Dependencies: []

// Module 5397 (id)
let c0 = 0;
arg5.id = () => {
  const result = (c0 + 1) % Number.MAX_SAFE_INTEGER;
  c0 = result;
  return result;
};
