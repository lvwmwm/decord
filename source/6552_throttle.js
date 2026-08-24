// Module ID: 6552
// Function ID: 6553
// Name: throttle
// Dependencies: []

// Module 6552 (throttle)
arg5.throttle = function throttle(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return function() {
    if (null == timeout) {
      const self = this;
      callback.apply(this, tmp);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        c2 = undefined;
      }, closure_1);
    }
  };
};
