// Module ID: 8513
// Function ID: 8514
// Name: debounce
// Dependencies: []

// Module 8513 (debounce)
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
