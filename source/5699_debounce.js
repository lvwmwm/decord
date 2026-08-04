// Module ID: 5699
// Function ID: 5700
// Name: debounce
// Dependencies: []

// Module 5699 (debounce)
arg5.default = function debounce(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return function() {
    if (!timeout) {
      const self = this;
      callback.apply(this, tmp);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let c2;
      }, closure_1);
    }
  };
};
