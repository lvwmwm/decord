// Module ID: 1227
// Function ID: 1228
// Name: invariant
// Dependencies: []

// Module 1227 (invariant)

export default function invariant(arg0, arg1) {
  if (!arg0) {
    const _Error = Error;
    error = new Error("Invariant failed");
    throw error;
  }
};
