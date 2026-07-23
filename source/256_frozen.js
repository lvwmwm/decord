// Module ID: 256
// Function ID: 3323
// Name: frozen
// Dependencies: []

// Module 256 (frozen)
const frozen = Object.freeze({ VISIBLE: 1, SUSPENDED: 2, HIDDEN: 3 });
arg5.default = frozen;
arg5.coerceDisplayMode = function coerceDisplayMode(arg0) {
  if (frozen.SUSPENDED === arg0) {
    return frozen.SUSPENDED;
  } else if (frozen.HIDDEN === arg0) {
    return frozen.HIDDEN;
  } else {
    return frozen.VISIBLE;
  }
};
