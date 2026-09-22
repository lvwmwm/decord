// Module ID: 8500
// Function ID: 8501
// Dependencies: []

// Module 8500

export default function head(arg0) {
  let first;
  if (arg0) {
    if (arg0.length) {
      first = arg0[0];
    }
  }
  return first;
};
