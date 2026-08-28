// Module ID: 8599
// Function ID: 8600
// Name: head
// Dependencies: []

// Module 8599 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
