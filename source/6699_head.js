// Module ID: 6699
// Function ID: 6700
// Name: head
// Dependencies: []

// Module 6699 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
