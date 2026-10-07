// Module ID: 924
// Function ID: 925
// Name: runOnce
// Dependencies: []
// Exports: runOnce

// Module 924 (runOnce)
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
