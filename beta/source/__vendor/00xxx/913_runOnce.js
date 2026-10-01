// Module ID: 913
// Function ID: 914
// Name: runOnce
// Dependencies: []
// Exports: runOnce

// Module 913 (runOnce)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const runOnce = (arg0) => {
  let closure_0 = arg0;
  let c1 = false;
  return () => {
    const tmp = c1;
    if (!tmp) {
      closure_0();
      c1 = true;
    }
  };
};
