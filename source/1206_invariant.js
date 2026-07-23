// Module ID: 1206
// Function ID: 13872
// Name: invariant
// Dependencies: []

// Module 1206 (invariant)

export default function invariant(arg0, arg1) {
  if (!arg0) {
    const _Error = Error;
    const error = new Error("Invariant failed");
    throw error;
  }
};
