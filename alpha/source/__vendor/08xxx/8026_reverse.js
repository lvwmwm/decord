// Module ID: 8026
// Function ID: 8027
// Name: reverse
// Dependencies: []

// Module 8026 (reverse)

export default function reverse(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const call = reverse.call;
    typeof call === "unknown" ? reverse() : call(arg0);
  }
};
