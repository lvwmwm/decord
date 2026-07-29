// Module ID: 612
// Function ID: 613
// Name: objectToString
// Dependencies: []

// Module 612 (objectToString)

export default function objectToString(arg0) {
  const call = toString.call;
  return typeof call === "unknown" ? toString() : call(arg0);
};
