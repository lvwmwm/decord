// Module ID: 8672
// Function ID: 8673
// Name: head
// Dependencies: []

// Module 8672 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
