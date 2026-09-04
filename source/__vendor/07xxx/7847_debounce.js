// Module ID: 7847
// Function ID: 7848
// Name: debounce
// Dependencies: []

// Module 7847 (debounce)
arg5.debounce = function debounce(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return function() {
    const self = this;
    closure_0 = [...arguments];
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(self, callback);
    }, self);
  };
};
