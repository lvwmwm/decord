// Module ID: 5834
// Function ID: 5835
// Name: throttle
// Dependencies: []

// Module 5834 (throttle)
arg5.throttle = function throttle(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return function() {
    if (null == timeout) {
      const self = this;
      callback.apply(this, tmp);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let c2;
      }, closure_1);
    }
  };
};
