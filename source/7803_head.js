// Module ID: 7803
// Function ID: 7804
// Name: head
// Dependencies: []

// Module 7803 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
