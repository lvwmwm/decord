// Module ID: 7702
// Function ID: 7703
// Name: head
// Dependencies: []

// Module 7702 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
