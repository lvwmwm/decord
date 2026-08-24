// Module ID: 8085
// Function ID: 8086
// Name: head
// Dependencies: []

// Module 8085 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
