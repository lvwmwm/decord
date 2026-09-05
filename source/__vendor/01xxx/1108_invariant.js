// Module ID: 1108
// Function ID: 1109
// Name: invariant
// Dependencies: []

// Module 1108 (invariant)

export default function invariant(arg0, arg1) {
  if (!arg0) {
    const _Error = Error;
    error = new Error("Invariant failed");
    throw error;
  }
};
