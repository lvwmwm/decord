// Module ID: 157
// Function ID: 2433
// Name: warnOnce
// Dependencies: []

// Module 157 (warnOnce)
let closure_0 = {};
arg5.default = function warnOnce(arg0, arg1) {
  if (!table[arg0]) {
    const _console = console;
    console.warn(arg1);
    table[arg0] = true;
  }
};
