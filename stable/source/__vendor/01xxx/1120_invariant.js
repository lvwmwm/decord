// Module ID: 1120
// Function ID: 1121
// Name: invariant
// Dependencies: []

// Module 1120 (invariant)

export default function invariant(arg0, arg1) {
  const tmp = arg0;
  if (!tmp) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Invariant failed");
    throw error;
  }
};
