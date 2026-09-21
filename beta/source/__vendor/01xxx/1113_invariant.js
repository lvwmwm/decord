// Module ID: 1113
// Function ID: 1114
// Name: invariant
// Dependencies: []

// Module 1113 (invariant)

export default function invariant(arg0, arg1) {
  if (!arg0) {
    const _Error = Error;
    const error = new Error("Invariant failed");
    throw error;
  }
};
