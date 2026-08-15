// Module ID: 6521
// Function ID: 6522
// Name: throttle
// Dependencies: []

// Module 6521 (throttle)
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
