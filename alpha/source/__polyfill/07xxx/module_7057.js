// Module ID: 7057
// Function ID: 7058
// Dependencies: []
// Exports: throttle

// Module 7057
let c2;


export function throttle(arg0, arg1) {
  let closure_2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  return function() {
    let timeout;
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
