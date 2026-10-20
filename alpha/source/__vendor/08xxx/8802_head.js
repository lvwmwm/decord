// Module ID: 8802
// Function ID: 8803
// Name: head
// Dependencies: []

// Module 8802 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
