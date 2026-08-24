// Module ID: 8086
// Function ID: 8087
// Name: reverse
// Dependencies: []

// Module 8086 (reverse)

export default function reverse(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const call = reverse.call;
    typeof call === "unknown" ? reverse() : call(arg0);
    const tmp = reverse;
  }
};
