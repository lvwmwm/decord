// Module ID: 7150
// Function ID: 7151
// Name: head
// Dependencies: []

// Module 7150 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
