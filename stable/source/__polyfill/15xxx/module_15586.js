// Module ID: 15586
// Function ID: 15587
// Dependencies: [15587]

// Module 15586
import module_15587_mod from "module_15587" /* 15587 */;

const call = prototype.call;
let module_15587 = module_15587_mod;
if (module_15587) {
  const bind = prototype.bind;
  module_15587 = bind.bind(call, call);
}
if (!module_15587) {
  module_15587 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15587;
