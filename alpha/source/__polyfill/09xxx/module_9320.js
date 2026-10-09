// Module ID: 9320
// Function ID: 9321
// Dependencies: []
// Exports: debounce

// Module 9320

export function debounce(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return function() {
    let closure_2;
    let timeout;
    const self = this;
    closure_0 = [...arguments];
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      closure_0.apply(self, closure_0);
    }, self);
  };
}
