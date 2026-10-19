// Module ID: 15331
// Function ID: 15332
// Dependencies: [15332]

// Module 15331
import module_15332_mod from "module_15332" /* 15332 */;

const call = prototype.call;
let module_15332 = module_15332_mod;
if (module_15332) {
  const bind = prototype.bind;
  module_15332 = bind.bind(call, call);
}
if (!module_15332) {
  module_15332 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15332;
