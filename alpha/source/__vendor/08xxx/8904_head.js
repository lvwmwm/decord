// Module ID: 8904
// Function ID: 8905
// Name: head
// Dependencies: []

// Module 8904 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
