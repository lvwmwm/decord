// Module ID: 8573
// Function ID: 8574
// Name: debounce
// Dependencies: []

// Module 8573 (debounce)
arg5.debounce = function debounce(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return function() {
    const self = this;
    let closure_0 = [...arguments];
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(self, callback);
    }, self);
  };
};
