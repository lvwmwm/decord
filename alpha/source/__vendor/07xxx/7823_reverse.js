// Module ID: 7823
// Function ID: 7824
// Name: reverse
// Dependencies: []

// Module 7823 (reverse)

export default function reverse(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const call = reverse.call;
    typeof call === "unknown" ? reverse() : call(arg0);
  }
};
