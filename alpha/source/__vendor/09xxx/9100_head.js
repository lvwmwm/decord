// Module ID: 9100
// Function ID: 9101
// Name: head
// Dependencies: []

// Module 9100 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
