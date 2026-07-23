// Module ID: 1024
// Function ID: 11077
// Name: runOnce
// Dependencies: []

// Module 1024 (runOnce)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.runOnce = function runOnce(arg0) {
  let closure_0 = arg0;
  let c1 = false;
  return () => {
    if (!c1) {
      callback();
      c1 = true;
    }
  };
};
