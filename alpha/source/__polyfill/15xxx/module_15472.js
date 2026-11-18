// Module ID: 15472
// Function ID: 15473
// Dependencies: [15473]

// Module 15472
import module_15473_mod from "module_15473" /* 15473 */;

const call = prototype.call;
let module_15473 = module_15473_mod;
if (module_15473) {
  const bind = prototype.bind;
  module_15473 = bind.bind(call, call);
}
if (!module_15473) {
  module_15473 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15473;
