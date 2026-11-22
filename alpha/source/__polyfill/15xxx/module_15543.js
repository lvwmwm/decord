// Module ID: 15543
// Function ID: 15544
// Dependencies: [15544]

// Module 15543
import module_15544_mod from "module_15544" /* 15544 */;

const call = prototype.call;
let module_15544 = module_15544_mod;
if (module_15544) {
  const bind = prototype.bind;
  module_15544 = bind.bind(call, call);
}
if (!module_15544) {
  module_15544 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15544;
