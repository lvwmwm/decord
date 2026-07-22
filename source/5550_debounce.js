// Module ID: 5550
// Function ID: 47126
// Name: debounce
// Dependencies: []

// Module 5550 (debounce)
arg5.default = function debounce(arg0, arg1) {
  return function() {
    if (!timeout) {
      const length = arguments.length;
      const _Array = Array;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const self = this;
      arg0.apply(this, array);
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        let closure_2;
      }, arg1);
    }
  };
};
