// Module ID: 7601
// Function ID: 7602
// Name: head
// Dependencies: []

// Module 7601 (head)

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
