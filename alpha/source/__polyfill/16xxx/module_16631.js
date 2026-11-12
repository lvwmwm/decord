// Module ID: 16631
// Function ID: 16632
// Dependencies: [16632]

// Module 16631
import module_16632_mod from "module_16632" /* 16632 */;

const call = prototype.call;
let module_16632 = module_16632_mod;
if (module_16632) {
  const bind = prototype.bind;
  module_16632 = bind.bind(call, call);
}
if (!module_16632) {
  module_16632 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16632;
