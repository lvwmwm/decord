// Module ID: 8733
// Function ID: 8734
// Name: reverse
// Dependencies: []

// Module 8733 (reverse)

export default function reverse(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const call = reverse.call;
    typeof call === "unknown" ? reverse() : call(arg0);
  }
};
