// Module ID: 8902
// Function ID: 8903
// Name: head
// Dependencies: []

// Module 8902 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
