// Module ID: 157
// Function ID: 2433
// Name: warnOnce
// Dependencies: []

// Module 157 (warnOnce)
let closure_0 = {};
arg5.default = function warnOnce(arg0, arg1) {
  if (!closure_0[arg0]) {
    const _console = console;
    console.warn(arg1);
    closure_0[arg0] = true;
  }
};
