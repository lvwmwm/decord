// Module ID: 8600
// Function ID: 8601
// Name: reverse
// Dependencies: []

// Module 8600 (reverse)

export default function reverse(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const call = reverse.call;
    typeof call === "unknown" ? reverse() : call(arg0);
    const tmp = reverse;
  }
};
