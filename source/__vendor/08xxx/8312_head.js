// Module ID: 8312
// Function ID: 8313
// Name: head
// Dependencies: []

// Module 8312 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
