// Module ID: 527
// Function ID: 528
// Name: objectToString
// Dependencies: []

// Module 527 (objectToString)

export default function objectToString(arg0) {
  const call = toString.call;
  return typeof call === "unknown" ? toString() : call(arg0);
};
