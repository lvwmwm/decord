// Module ID: 609
// Function ID: 610
// Name: objectToString
// Dependencies: []

// Module 609 (objectToString)

export default function objectToString(arg0) {
  const call = toString.call;
  return typeof call === "unknown" ? toString() : call(arg0);
};
