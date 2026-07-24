// Module ID: 5551
// Function ID: 47146
// Name: debounce
// Dependencies: []

// Module 5551 (debounce)
arg5.default = function debounce(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return function() {
    if (!timeout) {
      const length = arguments.length;
      const _Array = Array;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const self = this;
      callback.apply(this, array);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let closure_2;
      }, closure_1);
    }
  };
};
