// Module ID: 15552
// Function ID: 15553
// Dependencies: [15553]

// Module 15552
import module_15553_mod from "module_15553" /* 15553 */;

const call = prototype.call;
let module_15553 = module_15553_mod;
if (module_15553) {
  const bind = prototype.bind;
  module_15553 = bind.bind(call, call);
}
if (!module_15553) {
  module_15553 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15553;
