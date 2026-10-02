// Module ID: 925
// Function ID: 926
// Name: runOnce
// Dependencies: []
// Exports: runOnce

// Module 925 (runOnce)
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
