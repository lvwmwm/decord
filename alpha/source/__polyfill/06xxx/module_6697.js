// Module ID: 6697
// Function ID: 6698
// Dependencies: []
// Exports: throttle

// Module 6697
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
