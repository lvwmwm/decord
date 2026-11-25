// Module ID: 15553
// Function ID: 15554
// Dependencies: [15554]

// Module 15553
import module_15554_mod from "module_15554" /* 15554 */;

const call = prototype.call;
let module_15554 = module_15554_mod;
if (module_15554) {
  const bind = prototype.bind;
  module_15554 = bind.bind(call, call);
}
if (!module_15554) {
  module_15554 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15554;
