// Module ID: 615
// Function ID: 616
// Name: eq
// Dependencies: []

// Module 615 (eq)

export default function eq(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    tmp = arg0 != arg0 && arg1 != arg1;
  }
  return tmp;
};
