// Module ID: 1024
// Function ID: 11072
// Name: runOnce
// Dependencies: []

// Module 1024 (runOnce)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.runOnce = function runOnce(arg0) {
  let closure_1 = false;
  return () => {
    if (!closure_1) {
      arg0();
      closure_1 = true;
    }
  };
};
