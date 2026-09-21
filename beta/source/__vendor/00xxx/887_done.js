// Module ID: 887
// Function ID: 888
// Name: done
// Dependencies: [888]

// Module 887 (done)
import _mod888 from "module_888" /* 888 */;

_mod888.prototype.done = function(arg0, arg1) {
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

export default _mod888;
