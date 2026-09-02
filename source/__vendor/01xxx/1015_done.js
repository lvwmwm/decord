// Module ID: 1015
// Function ID: 1016
// Name: done
// Dependencies: [1016]

// Module 1015 (done)
import noop from "noop" /* 1016 */;

noop.prototype.done = function(arg0, arg1) {
  const self = this;
  let self2 = this;
  if (arguments.length) {
    const then = self.then;
    self2 = then(...arguments);
  }
  self2.then(null, (arg0) => {
    closure_0 = arg0;
    const timerId = setTimeout(() => {
      throw closure_0;
    }, 0);
  });
};

export default noop;
