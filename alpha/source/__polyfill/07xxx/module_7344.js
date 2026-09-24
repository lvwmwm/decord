// Module ID: 7344
// Function ID: 7345
// Dependencies: []
// Exports: throttle

// Module 7344

export function throttle(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return function() {
    if (null == timeout) {
      const self = this;
      closure_0.apply(this, tmp);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        c2 = undefined;
      }, closure_1);
    }
  };
}
