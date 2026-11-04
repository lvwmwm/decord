// Module ID: 883
// Function ID: 884
// Dependencies: [177]

// Module 883
import _mod177 from "module_177" /* 177 */;

_mod177.prototype.done = function(arg0, arg1) {
  const self = this;
  let self2 = this;
  if (arguments.length) {
    const then = self.then;
    self2 = then(...arguments);
  }
  self2.then(null, (arg0) => {
    let closure_0 = arg0;
    const timerId = setTimeout(() => {
      throw closure_0;
    }, 0);
  });
};

export default _mod177;
