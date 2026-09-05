// Module ID: 7916
// Function ID: 7917
// Name: debounce
// Dependencies: []

// Module 7916 (debounce)
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
