// Module ID: 895
// Function ID: 896
// Dependencies: [896]

// Module 895
import _mod896 from "module_896" /* 896 */;

_mod896.prototype.done = function(arg0, arg1) {
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

export default _mod896;
