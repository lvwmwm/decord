// Module ID: 9934
// Function ID: 9935
// Name: debounce
// Dependencies: []

// Module 9934 (debounce)
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
