// Module ID: 8500
// Function ID: 8501
// Name: head
// Dependencies: []

// Module 8500 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
